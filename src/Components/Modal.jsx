import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

export default class Modal extends Component {
	render() {
		// console.log(this, this.props);

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

												<div className="buttons">
													<Link to="/cereal-list">
														<BackButton
															onClick={() => {
																closeModal();
															}}
														>
															Back
														</BackButton>
													</Link>

													{value.product === '/cereal-list' ? (
														<Link to="/glue-list">
															<NextButton
																onClick={() => {
																	closeModal();
																}}
															>
																To Glue!
															</NextButton>
														</Link>
													) : (
														<Link to="/cart">
															<NextButton
																onClick={() => {
																	closeModal();
																}}
															>
																To Cart!
															</NextButton>
														</Link>
													)}
												</div>
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
		border-radius: 1rem;
		padding: 3rem;
	}
	#modal > .buttons {
		display: flex;
		justify-content: space-around;
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

const NextButton = styled.button`
	background-color: #f0a4f0;
	border: .05rem solid #f0a4f0;
	border-radius: .4rem;
	color: white;
	font-size: 1.4rem;
	padding: .5rem .7rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	&:hover {
		background-color: white;
		color: #f0a4f0;
	}
	&:focus {
		outline: none;
	}
`;
