import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

export default class Glue extends Component {
	render() {
		const { id, image, name, inCart } = this.props.product;
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						if (id > 78) {
							return (
								<GlueWrapper className="mx-auto col-9 col-md-6 col-lg-3 my-3">
									<div className="card">
										<div className="cereal-image" onClick={() => value.handleDetail(id)}>
											<Link to={'/milk/id'}>
												<img className="card-img-top" src={image} alt="milk box" />
											</Link>
											{/* disabled logic is once the item is added to the shopping cart we dont want to be able to re add it */}
											<button
												className="cart-button"
												disabled={inCart ? true : false}
												onClick={() => {
													value.addToCart(id);
													value.openModal(id);
												}}
											>
												{' '}
												{inCart ? (
													<i className="fas fa-check" />
												) : (
													<i className="fas fa-plus" />
												)}
												{/* <i className={'fas ' + (inCart ? 'fa-check' : 'fa-plus')} /> */}
											</button>
										</div>

										<div className="card-footer d-flex justify-content-between">
											<p className="align-self-center mb-0">{name}</p>
										</div>
									</div>
								</GlueWrapper>
							);
						}
					}}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

const GlueWrapper = styled.div`
	position: relative;

	.card {
		border-color: transparent;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
	}
	.cereal-image {
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
