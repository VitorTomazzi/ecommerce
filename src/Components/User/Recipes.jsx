import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Recipes extends Component {
	render() {
		return (
			<Recipe className="container">
				<div className="row">
					<div className="col recipe-text">
						<h1 className="text-capitalize">
							{' '}
							<span className="secret">Secret</span> Cereal Bar
						</h1>
						<p>
							This cereal bar recipe is proprietary knowledge and can be made in just 10 minutes. The best
							part about these cereal bars is that you can use your favorite cereal to make them.
							Obviously that means Honey Nut Cheerios.
						</p>
						<ol>
							<li>Line a 8×8 inch pan with parchment paper and set aside.</li>
							<li>Combine the peanut butter and honey in a medium size sauce pan</li>
							<li>Cook for 3 minutes, stirring occasionally. Remove from heat and stir in vanilla.</li>
							<li>Add in the dry cereal and stir until completely coated.</li>
							<li>
								Press into the lined pan. Use a piece of parchment paper to press firmly down on the
								bars.
							</li>
							<li>Refrigerate bars for one hour, or until ready to serve.</li>
						</ol>

						<Link to="https://www.iheartnaptime.net/cereal-bars/">
							<h6>Credit: https://www.iheartnaptime.net/cereal-bars/</h6>
						</Link>
					</div>

					<div className="col recipe-image">
						<img
							src="https://www.iheartnaptime.net/wp-content/uploads/2018/08/homemade-cereal-bars-2.jpg"
							alt="cereal bar"
						/>
					</div>
				</div>
			</Recipe>
		);
	}
}

const Recipe = styled.div`
	border: .1rem solid rgba(240, 164, 240, 0.7);
	margin: 1rem auto;
	background-color: rgba(240, 164, 240, 0.1);
	border-radius: 1rem;
	padding: 5rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	.secret {
		text-decoration: underline;
		color: #a4a4f0;
	}

	.recipe-text h1 {
		font-family: 'Luckiest Guy', cursive;
		text-align: center;
	}
	.recipe-image img {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		width: 25rem;
		height: 25rem;
		box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
		border-radius: .3rem;
	}
	.recipe-image {
		padding: 2rem;
	}
`;
