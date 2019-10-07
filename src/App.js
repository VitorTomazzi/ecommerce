import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import ProductList from './Components/ProductList.jsx';
import Product from './Components/Product.jsx';
import Details from './Components/Details.jsx';
import Cart from './Components/Cart.jsx';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product-list" component={ProductList} />
					<Route exact path="/product/:id" component={Details} />
					<Route exact path="/cart" component={Cart} />
				</Switch>
			</React.Fragment>
		);
	}
}
