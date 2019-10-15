import React, { Component } from 'react';
// import { ProductConsumer } from '../../Context';
import styled from 'styled-components';

export default class Item extends Component {
	render() {
		// console.log(this.props.item)
		// console.log(this.props.value);
		const { id, name, image } = this.props.item;
		const { removeItem } = this.props.value;

		return (
			<CartItem className="row text-center my-3">
				<div className="col-10 mx-auto col-lg-2">
					<img src={image} alt="product" />
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p>{name}</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<div className="remove-icon" onClick={() => removeItem(id, image)}>
						<i className="fas fa-trash" />
					</div>
				</div>
			</CartItem>
		);
	}
}

const CartItem = styled.div`
	border: .01rem solid black;
	border-radius: .1rem;
	padding: .5rem;
	background-color: white;
	div {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	img {
		width: 5rem;
		height: 5 rem;
	}
	.remove-icon {
		color: lightcoral;
	}
`;
