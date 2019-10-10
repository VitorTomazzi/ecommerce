import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class HowItWorks extends Component {
	render() {
		return (
			<React.Fragment>
				<How>
					<div className="how-heading">
						<h2> How it works </h2>
					</div>
					<div className="how-content">
						<div className="how">
							<img
								className="how-pic"
								src="https://img.icons8.com/ios/50/000000/salad-bowl.png"
								alt="cereal"
							/>
							<h3>Pick your brick</h3>
						</div>

						<img src="https://img.icons8.com/ios-glyphs/50/000000/more-than.png" alt="arrow" />

						<div className="how">
							<img src="https://img.icons8.com/pastel-glyph/64/000000/milk-bottle.png" alt="glue" />
							<h3>Pick your mortar</h3>
						</div>

						<img src="https://img.icons8.com/ios-glyphs/50/000000/more-than.png" alt="arrow" />

						<div className="how">
							<img src="https://img.icons8.com/ios/50/000000/successful-delivery.png" alt="delivery" />
							<h3>Sit tight then enjoy</h3>
						</div>
					</div>
					<div className="button">
						<Link to="/cereal-list">
							<StartButton>Let's get started!</StartButton>
						</Link>
					</div>
				</How>
			</React.Fragment>
		);
	}
}

const How = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 7rem;
	border: .1rem solid black;
	border-right-color: transparent;
	border-left-color: transparent;
	.how-content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
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
	.button {
		text-align: center;
		margin-top: 3rem;
	}
	.how-heading {
		margin-bottom: 2.5rem;
	}
`;

//styled component for button. we can put this in its own component file later if we want
const StartButton = styled.button`
	background-color: black;
	border: .05rem solid black;
	border-radius: .4rem;
	color: white;
	font-size: 1.4rem;
	padding: .5rem .7rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	&:hover {
		background-color: white;
		color: black;
	}
	&:focus {
		outline: none;
	}
`;
