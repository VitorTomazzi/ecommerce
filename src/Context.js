import React, { Component } from 'react';
import { data } from './cereal';
import { is } from '@babel/types';

const ProductContext = React.createContext();
//context object always comes with two components: a provider and consumer

class ProductProvider extends Component {
	state = {
		cereal: [],
		details: data[0],
		cart: []
	};

	// this creates a copy of the data so that when we change things we arent changing the original data
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let tempCereal = [];
		data.forEach((item) => {
			tempCereal.push({ ...item });
		});
		this.setState(() => {
			return { cereal: tempCereal };
		});
	};

	getCereal = (id) => {
		// console.log(this.state.cereal);
		const eachCereal = this.state.cereal.find((item) => item.id === id);
		// console.log(eachCereal);
		return eachCereal;
	};

	handleDetail = (id) => {
		const eachCerealDetail = this.getCereal(id);
		this.setState(() => {
			return { details: eachCerealDetail };
		});
	};

	addToCart = (id) => {
		let tempCereal = [ ...this.state.cereal ];
		const index = tempCereal.indexOf(this.getCereal(id));
		const cereal = tempCereal[index];
		cereal.inCart = true;
		this.setState(() => {
			return (
				{
					cereal: tempCereal,
					cart: [ ...this.state.cart, cereal ]
				},
				() => {
					console.log(this.state);
				}
			);
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					// destructured allows us to get ALL properties in data
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					// test: () => console.log('test')
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
