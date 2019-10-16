import React, { Component } from 'react';
import Cereal from './Cereal.jsx';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						//console.log(value);
						return <Products {...this.props} value={value} />;
					}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

class Products extends Component {
	componentDidMount() {
		this.props.value.setProducts(this.props.match.path);
	}
	componentDidUpdate(prevProps) {
		if (this.props.match.path !== prevProps.match.path) {
			//Stops it from looping.  Only works if prevProps doesn't equal newProps
			this.props.value.setProducts(this.props.match.path);
		}
	}

	render() {
		let value = this.props.value;
		return (
			<div>
				<ProductTitle>
					{this.props.match.path === '/cereal-list' ? (
						<h1>
							Pick your favorite <span className="title">cereal</span>
						</h1>
					) : (
						<h1>
							Pick your favorite <span className="title">glue</span>
						</h1>
					)}
				</ProductTitle>

				<Search className="col-10 mx-auto col-md-8 mt-5 mb-5">
					<form>
						<div className="search">
							<input
								name="search"
								onChange={value.searchCereal}
								type="text"
								className="searchTerm"
								placeholder="What's for breakfast?"
							/>
							<button type="submit" className="searchButton">
								<i className="fa fa-search" />
							</button>
						</div>
					</form>
				</Search>

				<ProductListWrapper>
					{value.cereal.map((eachCereal, i) => {
						return (
							<Cereal
								key={i}
								cereal={eachCereal}
								{...this.props}
								inCart={checkIfCerealInCart(eachCereal, value.cart)}
							/>
						);
					})}
				</ProductListWrapper>
			</div>
		);
	}
}

// need to lift this up so that I can have access to it in the context and in turn in the details page 
function checkIfCerealInCart(eachCereal, cart) {
	// console.log(cart);
	for (let c = 0; c < cart.length; c++) {
		let cereal = cart[c];
		// console.log(cereal.image, eachCereal.image, cereal.image === eachCereal.image);
		if (cereal.image === eachCereal.image) {
			//found a match
			// console.log('match');
			return true;
		}
		// console.log('no match');
		return false;
	}
}


const ProductTitle = styled.div`
	text-align: center;
	font-family: 'Luckiest Guy', cursive;
	margin-top: 2rem;
	.title {
		color: #f0a4f0;
	}
`;

const ProductListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Search = styled.div`
	padding: .5rem;
	form {
		display: flex;
		justify-content: center;
	}
	input {
		width: 30vw;
		border-radius: .1rem;
	}
	h4 {
		text-align: center;
	}

	.search {
		width: 30vw;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.searchTerm {
		width: 100vw;
		border: 3px solid #a4a4f0;
		border-right: none;
		padding: 1rem;
		height: 1rem;
		border-radius: 5px 0 0 5px;
		outline: none;
		color: #9dbfaf;
	}

	.searchTerm:focus {
		color: #a4a4f0;
	}

	.searchButton {
		width: 40px;
		height: 38px;
		border: 1px solid #a4a4f0;
		background: #a4a4f0;
		text-align: center;
		color: #fff;
		border-radius: 0 5px 5px 0;
		cursor: pointer;
		font-size: 20px;
	}
`;
