import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">
						Krunch
					</Link>
					<Link className="nav-item nav-link active" to="/cereal-list">
						Brick's List
					</Link>
					<Link className="nav-item nav-link active" to="/glue-list">
						Mortar's List
					</Link>
					<Link className="nav-item nav-link ml-auto" to="/cart">
						<CartButton>Shopping Cart</CartButton>
					</Link>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;

//styled component for button. we can put this in its own component file later if we want
const CartButton = styled.button`
	background-color: transparent;
	border: .05rem solid lightblue;
	border-radius: .2rem;
	color: white;
	font-size: 1.4rem;
	padding: .2rem .5rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	&:hover {
		background-color: lightblue;
	}
	&:focus {
		outline: none;
	}
`;
