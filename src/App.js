import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import CerealList from './Components/CerealList.jsx';
import Details from './Components/Details.jsx';
import Cart from './Components/Cart.jsx';
import Modal from './Components/Modal.jsx';

export default class App extends Component {
	render() {
		// console.log(this);
		return (
			<React.Fragment>
				<Navbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cereal-list" component={CerealList} />
					<Route exact path="/glue-list" component={CerealList} />
					<Route exact path="/cereal" component={Details} />
					<Route exact path="/glue" component={Details} />
					<Route exact path="/cart" component={Cart} />
				</Switch>

				<Modal />
			</React.Fragment>
		);
	}
}
