import React, { Component } from 'react';
import Product from './Product.jsx';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<p>Hello World</p>

				<Product />
			</React.Fragment>
		);
	}
}
