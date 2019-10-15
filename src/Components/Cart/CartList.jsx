import React, { Component } from 'react';
import { ProductConsumer } from '../../Context';
import styled from 'styled-components';
import Item from './Item';

export default class CartList extends Component {
	render() {
		// console.log(this.props.value);

		return (
			<React.Fragment>
            <div className="container">
                {this.props.value.cart.map((item,i) => {
                    return <Item key={i} item={item} value={this.props.value}/>
                })}
            </div>
			</React.Fragment>
		);
	}
}
