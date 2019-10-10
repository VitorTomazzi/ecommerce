import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';

export default class Details extends Component {
	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						const {
							id,
							name,
							image,
							inCart,
							calories,
							protein,
							fat,
							sodium,
							fiber,
							carbo,
							sugars,
							potass,
							rating
						} = value.details;
						return (
							<DetailsWrapper className="container">
								<div className="row">
									<div className="col-10 mx-auto text-center my-5">
										<h1>{name}</h1>
									</div>
								</div>
								<div className="row">
									<div className="details-image col-10 mx-auto col-md-6">
										<img className="image-fluid" src={image} alt="cereal" />
									</div>
									<div className="nutrition col-10 mx-auto col-md-6">
										<h3>Nutrional Values</h3>
										<ul>
											<li>Calories: {calories}</li>
											<li>Protein: {protein} grams</li>
											<li>Fat: {fat} grams</li>
											<li>Carbohydrates: {carbo} grams</li>
											<li>Added sugars: {sugars} grams</li>
											<li>Sodium: {sodium} mg</li>
											<li>Potassium: {potass} mg</li>
											<li>Fiber: {fiber} grams</li>
											<li>Overall Health Rating: {rating}</li>
										</ul>
										<div>
											<Link to="/cereal-list">
												<BackButton>Back to Cereals</BackButton>
											</Link>
											<Link to="#">
												<CartButton
													disabled={inCart ? true : false}
													onClick={() => {
														value.addToCart(id);
													}}
												>
													{inCart ? 'In Cart' : 'Add to Cart'}
												</CartButton>
											</Link>
										</div>
									</div>
								</div>
							</DetailsWrapper>
						);
					}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

const DetailsWrapper = styled.div`
	border: .2rem solid red;
	.details-image img {
		width: 25rem;
		overflow: hidden;
	}
	.nutrition ul {
		list-style: none;
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
