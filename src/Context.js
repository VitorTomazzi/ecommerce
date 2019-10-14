import React, { Component } from 'react';
import { cereal } from './cereal';
import { glue } from './glue';

// import { is } from '@babel/types';

const ProductContext = React.createContext();
//context object always comes with two components: a provider and consumer

class ProductProvider extends Component {
	state = {
		cereal: [ ...cereal ],
		glue: [ ...glue ],
		details: cereal[0], //placeholder from cereal set
		cart: [],
		isModalOpen: false,
		modalProduct: cereal[0], //placeholder from cereal set
		product: ''
	};

	// this creates a copy of the cereal so that when we change things we arent changing the original cereal
	// componentDidMount() {
	// 	this.setProducts();
	// }

	setProducts = (product) => {
		// console.log(product);

		let products = [];
		if (product === '/cereal-list') {
			products = [ ...cereal ];
		} else {
			products = [ ...glue ];
		}
		this.setState(() => {
			return {
				cereal: products,
				product
			};
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

		// console.log(cereal);

		//this.state.cart.push(cereal);

		// console.log(this.state.cart);

		this.setState(
			{
				cereal: tempCereal,
				cart: [ ...this.state.cart, cereal ]
			},
			() => {
				console.log(this.state);
			}
		);
	};

	searchCereal = (e) => {
		// console.log(e.target.value);
		let search = e.target.value;
		let filtered = cereal.filter((entry) => {
			return entry.name.toLowerCase().includes(search.toLowerCase());
		});
		this.setState({
			cereal: filtered
		});
	};

	// might rename const once mortars get integrated
	openModal = (id) => {
		const product = this.getCereal(id);
		this.setState({
			modalProduct: product,
			isModalOpen: true
		});
	};

	closeModal = () => {
		this.setState({
			isModalOpen: false
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					// destructured allows us to get ALL properties in data
					...this.state,
					setProducts: this.setProducts,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					searchCereal: this.searchCereal,
					showCereal: this.showCereal,
					openModal: this.openModal,
					closeModal: this.closeModal
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
