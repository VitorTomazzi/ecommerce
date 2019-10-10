import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class WhoWeAre extends Component {
	render() {
		return (
			<Hero>
				<div className="hero-image">
					{/* <img
						src="https://images.unsplash.com/photo-1515774004412-e3185c2a8217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1984&q=80"
						alt="hero"
					/> */}
					<div className="hero-text">
						<h1>Krunch</h1>
						<p>Customize your mornings</p>
						{/* <Link to=".how-heading">
							<i class="fas fa-angle-down" />
						</Link> */}
					</div>
				</div>
			</Hero>
		);
	}
}

const Hero = styled.div`
	/* The hero image */
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)),
			url("https://images.unsplash.com/photo-1515774004412-e3185c2a8217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1984&q=80");

		/* Set a specific height */
		width: 100vw;
		height: 100vh;

		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	/* Place text in the middle of the image */
	.hero-text {
		text-align: center;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: rgba(0, 0, 0, .8);
	}
	.hero-text h1 {
		font-size: 4rem;
	}
	.hero-text p {
		font-size: 1.5rem;
	}
`;
