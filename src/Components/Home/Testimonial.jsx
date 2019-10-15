import React, { Component } from 'react';
import styled from 'styled-components';

export default class Testimonial extends Component {
	render() {
		return (
			<React.Fragment>
				<Who className="container-fluid">
					<div className="who-heading">
						<h2 className="text-center"> Testimonials </h2>
					</div>
					<div className="row who-content">
						<div className="col-lg col-md who">
							<div className="who-pic">
								<img
									src="https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
									alt="user"
								/>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>

						<div className="col-lg col-md who">
							<div className="who-pic">
								<img
									src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
									alt="user"
								/>
							</div>
							<p>
								Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
								natoque penatibus et magnis dis
							</p>
						</div>

						<div className="col-lg col-md who">
							<div className="who-pic">
								<img
									src="https://images.unsplash.com/photo-1554731340-80eb1d6cec50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
									alt="user"
								/>
							</div>
							<p>
								Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque
								penatibus et magnis dis
							</p>
						</div>
					</div>
				</Who>
			</React.Fragment>
		);
	}
}

const Who = styled.div`
	padding: 5rem;
	border-right-color: transparent;
	border-left-color: transparent;
	background-color: rgba(164, 164, 240, .2);

	.who-content {
		${'' /* border: .1rem solid blue; */};
	}
	.who {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		${'' /* border: .1rem solid green; */} margin: 3rem .5rem;
		background-color: white;
		padding: 1.5rem;
		border-radius: 1rem;
	}
	.who-pic img {
		margin-bottom: 1rem;
		text-align: center;
		background: white;
		border: .1rem solid #fefefe;
		${'' /* padding: 2rem; */} border-radius: 50%;
		width: 10rem;
		height: 10rem;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		${'' /* background-image: url("https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"); */};
	}
	.who-heading {
		margin-bottom: 2.5rem;
		color: #f0a4f0;
		font-family: 'Luckiest Guy', cursive;
	}
	.who-heading h2 {
		font-size: 3.5rem;
	}
`;