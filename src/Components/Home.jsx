import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../Context';
import HowItWorks from './HowItWorks';
import WhoWeAre from './WhoWeAre';

export default class Home extends Component {
	render() {
		console.log(this);
		return (
			<React.Fragment>
				<WhoWeAre />
				<HowItWorks />
			</React.Fragment>
		);
	}
}
