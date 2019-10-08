import React, { Component } from 'react';
import styled from 'styled-components';

export default class HowItWorks extends Component {
	render() {
		return (
			<How>
				<div className="how">
					<img className="how-pic" src="https://img.icons8.com/ios/50/000000/salad-bowl.png" alt="cereal" />
					<h3>Pick your brick</h3>
				</div>

				<img src="https://img.icons8.com/ios-glyphs/50/000000/more-than.png" />

				<div className="how">
					<img src="https://img.icons8.com/pastel-glyph/64/000000/milk-bottle.png" alt="glue" />
					<h3>Pick your mortar</h3>
				</div>

				<img src="https://img.icons8.com/ios-glyphs/50/000000/more-than.png" />

				<div className="how">
					<img src="https://img.icons8.com/ios/50/000000/successful-delivery.png" alt="delivery" />
					<h3>Sit tight then enjoy</h3>
				</div>
			</How>
		);
	}
}

const How = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 25rem;
	border: .1rem solid black;
	border-right-color: transparent;
	border-left-color: transparent;
	.how {
		text-align: center;
		background: white;
		border: .1rem solid black;
		padding: 2rem;
		border-radius: .5rem;
		/* 320px */
		width: 20rem;
		height: 12rem;
	}
	.how img {
		margin-bottom: 1rem;
	}
`;
