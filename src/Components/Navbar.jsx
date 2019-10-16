import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
	render() {
		return (
			<React.Fragment>
				<Nav className="navbar navbar-dark">
					<Link className="navbar-brand" to="/">
						Krunch
					</Link>
					<Link className="nav-item nav-link ml-auto active" to="/cereal-list">
						Brick's List
					</Link>
					<Link className="nav-item nav-link ml-auto active" to="/glue-list">
						Mortar's List
					</Link>
					<Link className="nav-item nav-link ml-auto active" to="/signup">
						Sign Up
					</Link>
					<Link className="nav-item nav-link ml-auto active" to="/login">
						Login
					</Link>
					<Link className="nav-item nav-link ml-auto active" to="/recipes">
						Secret Recipe
					</Link>
					<Link className="nav-item nav-link ml-auto" to="/cart">
						<CartButton>Cart</CartButton>
					</Link>
				</Nav>
			</React.Fragment>
		);
	}
}

export default Navbar;

//styled component for button. we can put this in its own component file later if we want
const CartButton = styled.button`
	background-color: transparent;
	border: .05rem solid white;
	border-radius: .2rem;
	color: white;
	font-size: 1.4rem;
	padding: .2rem .5rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	&:hover {
		background-color: white;
		color: #a4a4f0;
	}
	&:focus {
		outline: none;
	}
`;

const Nav = styled.nav`
	background-color: #a4a4f0;
	opacity: .7;
	.nav-item {
		color: white;
	}
	.navbar-brand {
		font-family: 'Luckiest Guy', cursive;
	}
`;
