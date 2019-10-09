import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../Context';

export default class Product extends Component {
	render() {
		const { price, image, name, inCart } = this.props.cereal;

		return (
			<React.Fragment>
				<CerealWrapper className="mx-auto col-9 col-md-6 col-lg-3 my-3">
					<div className="card">
						<div 
						className="cereal-image" 
						//onClick={console.log('send to product details')}
						>
							<Link to={'/product/id'}>
								<img className="card-img-top" src={image} alt="cereal box" />
							</Link>
							{/* disabled logic is once the item is added to the shopping cart we dont want to be able to re add it */}
							<button
								className="cart-button"
								//onClick={console.log('added to cart')}
								disabled={inCart ? true : false}
							>
								{inCart ? (
									<p className="text-capitalized mb-0" disabled>
										{' '}
										In Cart
									</p>
								) : (
									/* <i class="fas fa-shopping-cart" /> */
									<i className="fas fa-plus" />
								)}
							</button>
						</div>

						<div className="card-footer d-flex justify-content-between">
							<p className="align-self-center mb-0">{name}</p>
							<h5 className="font-italic mb-0" hidden>
								{/* i hid the price for design reasons */}
								${price}
							</h5>
						</div>
					</div>
				</CerealWrapper>
			</React.Fragment>
		);
	}
}

const CerealWrapper = styled.div`
	.card {
		border-color: transparent;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
	}
	.cereal-image {
		position: relative;
		overflow: hidden;
	}
	.cart-button {
		position: absolute;
		right: 0;
		bottom: 0;
		background-color: lightblue;
		border: none;
		color: white;
		outline: none;
		border-radius: .5rem 0 0 0;
	}
	&:hover {
		.card {
			box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);
			transition: all .7s ease-in-out;
		}
		.cart-button {
			cursor: pointer;
		}
	}
`;
