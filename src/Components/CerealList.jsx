import React, { Component } from 'react';
import Cereal from './Cereal.jsx';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';
import { ProductContext } from '../Context';
// import { data } from '../cereal';
// import Search from './Search';

export default class CerealList extends Component {
	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						console.log(value);

						return <Products {...this.props} value={value} />;
					}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

class Products extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.value.setProducts(this.props.match.path);
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	/**
	// 	* this is the initial render
	// 	* without a previous prop change
	// 	*/
	// 	if (prevProps == undefined) {
	// 		return false;
	// 	}
	// 	this.props.value.setProducts(this.props.match.path);
	// }

	render() {
		console.log(this);
		let value = this.props.value;
		return (
			<div>
				<CerealTitle>
					<h1>Pick your favorite cereal</h1>
				</CerealTitle>

				<Search className="col-10 mx-auto col-md-8 mt-5 mb-5">
					<form>
						<div className="search">
							<input
								name="search"
								// id="search"
								onChange={value.searchCereal}
								type="text"
								className="searchTerm"
								placeholder="What are you looking for?"
							/>
							<button type="submit" className="searchButton">
								<i className="fa fa-search" />
							</button>
						</div>
					</form>
				</Search>

				<CerealListWrapper>
					{value.cereal.map((eachCereal, i) => {
						return <Cereal key={i} cereal={eachCereal} />;
					})}
				</CerealListWrapper>
			</div>
		);
	}
}

const CerealTitle = styled.div`
	text-align: center;
	font-family: 'Luckiest Guy', cursive;
	margin-top: 2rem;
`;

const CerealListWrapper = styled.div`
	border: .2rem solid blue;
	display: flex;
	flex-wrap: wrap;
`;

const Search = styled.div`
	border: .2rem solid red;
	padding: 1rem;
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
		border: 3px solid #00b4cc;
		border-right: none;
		padding: 1rem;
		height: 1rem;
		border-radius: 5px 0 0 5px;
		outline: none;
		color: #9dbfaf;
	}

	.searchTerm:focus {
		color: #00b4cc;
	}

	.searchButton {
		width: 40px;
		height: 38px;
		border: 1px solid #00b4cc;
		background: #00b4cc;
		text-align: center;
		color: #fff;
		border-radius: 0 5px 5px 0;
		cursor: pointer;
		font-size: 20px;
	}
`;
