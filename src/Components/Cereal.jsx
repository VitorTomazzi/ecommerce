import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

export default class Cereal extends Component {
	render() {
		const { id, image, name } = this.props.cereal;
		let  inCart  = this.props.inCart;
		// console.log(this.props);

		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						return (
							<CerealWrapper className="mx-auto col-9 col-md-6 col-lg-3 my-3">
								<div className="card">
									<div className="cereal-image" onClick={() => value.handleDetail(id)}>
										{this.props.match.path === '/cereal-list' ? (
											<Link to={'/cereal'}>
												<img className="card-img-top" src={image} alt="cereal box" />
											</Link>
										) : (
											<Link to={'/glue'}>
												<img className="card-img-top" src={image} alt="glue box" />
											</Link>
										)}

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
											{inCart ? <i className="fas fa-check" /> : <i className="fas fa-plus" />}
											{/* <i className={'fas ' + (inCart ? 'fa-check' : 'fa-plus')} /> */}
										</button>
									</div>

									<div className="card-footer d-flex justify-content-between">
										<h5 className="align-self-center mb-0 text-center">{name}</h5>
									</div>
								</div>
							</CerealWrapper>
						);
					}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

const CerealWrapper = styled.div`
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
		height: 23rem;
		padding: 2rem;
	}
	.cart-button {
		position: absolute;
		right: 0;
		bottom: 0;
		background-color: #f0a4f0;
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
