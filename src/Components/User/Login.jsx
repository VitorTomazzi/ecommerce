import React, { Component } from 'react';
import api from '../../api';
import styled from 'styled-components';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
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

	handleClick(e) {
		e.preventDefault();
		console.log(this.state);
		api
			.login(this.state)
			.then((result) => {
				console.log('SUCCESS!', result);
				this.props.setUser(result);
				this.props.history.push('/recipes'); // Redirect to the home page
			})
			.catch((err) => this.setState({ message: err.toString() }));
	}

	render() {
		return (
			<LogIn>
				<form id="login" className="container">
					<div className="header">
						<h3>Welcome Back!</h3>

						<p>We know. You're hungry, too</p>
					</div>

					<div className="sep" />

					<div className="inputs">
						<input
							type="text"
							value={this.state.username}
							name="username"
							placeholder="Username"
							onChange={this.handleInputChange}
						/>{' '}
						<input
							type="password"
							value={this.state.password}
							name="password"
							placeholder="Password"
							onChange={this.handleInputChange}
						/>{' '}
						<button id="submit" className="hoverButton" onClick={(e) => this.handleClick(e)}>
							Login
						</button>
						{this.state.message && <div className="info info-danger">{this.state.message}</div>}
					</div>
				</form>
			</LogIn>
		);
	}
}

const LogIn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 92vh;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	background-image: linear-gradient(rgba(164, 164, 240, 0.3), rgba(164, 164, 240, 0.05)),
		url("https://images.unsplash.com/photo-1490567674331-72de84794694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80");
	.container {
		width: 406px;
		max-width: 406px;
		$margin: 0 auto;
	}

	#login {
		padding: 25px 25px 25px;
		background: #fff;
		box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.4), 0px 4px 20px rgba(0, 0, 0, 0.33);
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		display: table;
		position: static;
	}

	#login .header {
		margin-bottom: 20px;
		text-align: center;
	}

	#login .header h3 {
		color: #333333;
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 5px;
	}

	#login .header p {
		color: #8f8f8f;
		font-size: 14px;
		font-weight: 300;
	}

	#login .sep {
		height: 1px;
		background: #e8e8e8;
		width: 406px;
		margin: 0px -25px;
	}

	#login .inputs {
		margin-top: 25px;
	}

	#login .inputs label {
		color: #8f8f8f;
		font-size: 12px;
		font-weight: 300;
		letter-spacing: 1px;
		margin-bottom: 7px;
		display: block;
	}

	input::-webkit-input-placeholder {
		color: #b5b5b5;
	}

	input:-moz-placeholder {
		color: #b5b5b5;
	}

	#login .inputs input[type=text],
	input[type=password] {
		background: #f5f5f5;
		font-size: 0.8rem;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		border: none;
		padding: 13px 10px;
		width: 330px;
		margin-bottom: 20px;
		box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.1);
		clear: both;
	}

	#login .inputs input[type=text]:focus,
	input[type=password]:focus {
		background: #fff;
		box-shadow: 0px 0px 0px 3px #fff38e, inset 0px 2px 3px rgba(0, 0, 0, 0.2), 0px 5px 5px rgba(0, 0, 0, 0.15);
		outline: none;
	}

	#login .inputs .checkboxy {
		display: block;
		position: static;
		height: 25px;
		margin-top: 10px;
		clear: both;
	}

	#login .inputs input[type=checkbox] {
		float: left;
		margin-right: 10px;
		margin-top: 3px;
	}

	#login .inputs label.terms {
		float: left;
		font-size: 14px;
		font-style: italic;
	}

	#login .inputs #submit {
		width: 100%;
		margin-top: 20px;
		padding: 15px 0;
		color: #fff;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 1px;
		text-align: center;
		text-decoration: none;
		background: -moz-linear-gradient(top, #b9c5dd 0%, #a4b0cb);
		background: -webkit-gradient(linear, left top, left bottom, from(#b9c5dd), to(#a4b0cb));
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		border: 1px solid #737b8d;
		-moz-box-shadow: 0px 5px 5px rgba(000, 000, 000, 0.1), inset 0px 1px 0px rgba(255, 255, 255, 0.5);
		-webkit-box-shadow: 0px 5px 5px rgba(000, 000, 000, 0.1), inset 0px 1px 0px rgba(255, 255, 255, 0.5);
		box-shadow: 0px 5px 5px rgba(000, 000, 000, 0.1), inset 0px 1px 0px rgba(255, 255, 255, 0.5);
		text-shadow: 0px 1px 3px rgba(000, 000, 000, 0.3), 0px 0px 0px rgba(255, 255, 255, 0);
		display: table;
		position: static;
		clear: both;
	}

	#login .inputs #submit:hover {
		background: -moz-linear-gradient(top, #a4b0cb 0%, #b9c5dd);
		background: -webkit-gradient(linear, left top, left bottom, from(#a4b0cb), to(#b9c5dd));
	}
`;
