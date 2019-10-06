import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
	render() {
		return (
			<React.Fragment>
				<Link className="navbar-brand" to="/product/:id">
					<p>I'm a Product</p>
				</Link>
			</React.Fragment>
		);
	}
}
