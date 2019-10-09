import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class WhoWeAre extends Component {
	render() {
		return (
			<Carousel id="carouselExampleControls" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active carousel-image">
						<img
							class="w-100"
							src="https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1577&q=80"
							alt="First slide"
						/>
					</div>
					<div class="carousel-item carousel-image">
						<img
							class="d-block w-100"
							src="https://images.unsplash.com/photo-1551978103-4b1b704719fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2667&q=80"
							alt="Second slide"
						/>
					</div>
					<div class="carousel-item carousel-image">
						<img
							class="d-block w-100"
							src="https://images.unsplash.com/photo-1551978103-4b1b704719fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2667&q=80"
							alt="Third slide"
						/>
					</div>
				</div>
			</Carousel>
		);
	}
}

const Carousel = styled.div`
    
`;
