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
						<h1>
							<span className="a">Kr</span>
							<span className="b">un</span>
							<span className="c">ch</span>
						</h1>
						<h5 className="text-capitalize">build-your-own breakfast</h5>
						{/* <h5 className="text-capitalize">customize your mornings</h5> */}
						{/* <p>Customize your mornings</p> */}
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
		background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
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
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
		${'' /* border: .1rem solid blue; */} text-align: center;
		position: absolute;
		top: 38%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: rgba(0, 0, 0, .9);
	}
	.hero-text h1 {
		font-size: 7.5rem;
		letter-spacing: .2rem;
		color: #f0a4f0;

		text-shadow: .1rem .1rem .8rem rgba(0, 0, 0, .2);
	}
	.hero-text h5 {
		font-size: 2.2rem;
		letter-spacing: .2rem;
		color: #a4a4f0;
		width: 25rem;
		text-align: center;
		text-wrap: wrap;
		text-shadow: .1rem .1rem .8rem rgba(0, 0, 0, .2);
	}
	.hero-text p {
		font-size: 2.2rem;
		width: 30rem;
		color: #a4a4f0;

		margin-left: 1rem;
	}
`;
