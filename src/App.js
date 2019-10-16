import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar.jsx';
import ProductList from './Components/ProductList.jsx';
import Details from './Components/Details.jsx';
import Cart from './Components/Cart/Cart';
import Modal from './Components/Modal.jsx';
import SignUp from './Components/User/SignUp';
import Login from './Components/User/Login';
import Recipes from './Components/User/Recipes';
import api from './api';

export default class App extends Component {
	state = {
		user: {}
	};

	componentDidMount() {
		api
			.getUser()
			.then((user) => {
				console.log(user);
				this.setUser(user);
			})
			.catch((err) => console.error(err));
	}
	setUser = (user) => {
		this.setState({ user });
	};
	render() {
		// console.log(this);
		return (
			<React.Fragment>
				<Navbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" render={(props) => <SignUp setUser={this.setUser} />} />
					<Route exact path="/login" render={(props) => <Login setUser={this.setUser} />} />
					{/* <Route exact path="/recipes" render={(props) => <Recipes setUser={this.setUser} />} /> */}
					<Route exact path="/recipes" component={Recipes} />
					<Route exact path="/cereal-list" component={ProductList} />
					<Route exact path="/glue-list" component={ProductList} />
					<Route exact path="/cereal" component={Details} />
					<Route exact path="/glue" component={Details} />
					<Route exact path="/cart" component={Cart} />
				</Switch>

				<Modal />
			</React.Fragment>
		);
	}
}
