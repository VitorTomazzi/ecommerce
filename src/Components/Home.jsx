import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import HowItWorks from './HowItWorks';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<HowItWorks />
				</div>
			</React.Fragment>
		);
	}
}


