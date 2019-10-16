import React, { Component } from 'react';
import api from '../../api';

export default class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			name: '',
			password: '',
			message: null
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleClick = (e) => {
		e.preventDefault();
		api
			.signup({ username: this.state.username, password: this.state.password })
			.then((result) => {
				console.log('SUCCESS!', result);
                this.props.setUser(result)
				this.props.history.push('/login');
			}) // Redirect to the login
			.catch((err) => this.setState({ message: err.toString() }));
	};

	render() {
		return (
			<div className="Signup">
				<h2>Sign up</h2>
				<br />
				<form>
					Username: <br />
					<input
						type="text"
						value={this.state.username}
						name="username"
						onChange={this.handleInputChange}
					/>{' '}
					<br />
					<br />
					Password: <br />
					<input
						type="password"
						value={this.state.password}
						name="password"
						onChange={this.handleInputChange}
					/>{' '}
					<br />
					<br />
					<button className="hoverButton" onClick={(e) => this.handleClick(e)}>
						Sign up
					</button>
				</form>
				{this.state.message && <div className="info info-danger">{this.state.message}</div>}
			</div>
		);
	}
}
