import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

export default class ModalCereal extends Component {
	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						const { isModalOpen, closeModal } = value;
						const { name, image } = value.modalProduct;

						if (!isModalOpen) {
							return null;
						} else {
							return (
								<ModalContainer>
									<div className="container">
										<div className="row">
											<div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto p-5">
												<h3>Item Added to Cart</h3>
												<img src={image} className="img-fluid" alt="cereal box" />
												<h4>{name}</h4>
												<Link to="/cereal-list">
													<BackButton
														onClick={() => {
															closeModal();
														}}
													>
														Back to Cereals
													</BackButton>
												</Link>
												<Link to="/cart">
													<CartButton
														onClick={() => {
															closeModal();
														}}
													>
														Go to Cart
													</CartButton>
												</Link>
											</div>
										</div>
									</div>
								</ModalContainer>
							);
						}
					}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

const ModalContainer = styled.div`
	border: .1rem solid green;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, .3);
	#modal {
		background: white;
	}
`;

const BackButton = styled.button`
	background-color: lightcoral;
	border: .05rem solid lightcoral;
	border-radius: .4rem;
	color: white;
	font-size: 1.4rem;
	padding: .5rem .7rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	margin-right: 1rem;
	&:hover {
		background-color: white;
		color: lightcoral;
	}
	&:focus {
		outline: none;
	}
`;

const CartButton = styled.button`
	background-color: lightgreen;
	border: .05rem solid lightgreen;
	border-radius: .4rem;
	color: white;
	font-size: 1.4rem;
	padding: .5rem .7rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	&:hover {
		background-color: white;
		color: lightgreen;
	}
	&:focus {
		outline: none;
	}
`;
