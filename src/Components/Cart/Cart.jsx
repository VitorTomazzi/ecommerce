import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../Context';
import CartColumns from './CartColumns';
import CartList from "./CartList"

export default class Cart extends Component {
	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						const { cart } = value;
						if (cart.length > 0) {
							return (
								<div>
									<CartTitle>
										<h1>Your Cart</h1>
									</CartTitle>

									<CartColumns />
									<CartList value={value}/>
								</div>
							);
						} else {
							return (
								<CartTitle>
									<h1>Your Cart is Empty</h1>
								</CartTitle>
							);
						}
					}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

const CartTitle = styled.div`
	text-align: center;
	font-family: 'Luckiest Guy', cursive;
	margin-top: 2rem;
`;
