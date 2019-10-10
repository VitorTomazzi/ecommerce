import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import CerealList from './Components/CerealList.jsx';
import Details from './Components/Details.jsx';
import Cart from './Components/Cart.jsx';
import ModalCereal from './Components/ModalCereal.jsx';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cereal-list" component={CerealList} />
					<Route exact path="/cereal/:id" component={Details} />
					<Route exact path="/cart" component={Cart} />
				</Switch>

				<ModalCereal />
			</React.Fragment>
		);
	}
}
