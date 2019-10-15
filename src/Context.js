import React, { Component } from 'react';
import { cereal } from './cereal';
import { glue } from './glue';

const ProductContext = React.createContext();
//context object always comes with two components: a provider and consumer

class ProductProvider extends Component {
	state = {
		cereal: [ ...cereal ],
		glue: [ ...glue ],
		details: cereal[0], //placeholder from cereal dataset
		cart: [],
		isModalOpen: false,
		modalProduct: cereal[0], //placeholder from cereal dataset
		product: '',
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0
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

		// console.log(cereal);

		// console.log(this.state.cart);

		this.setState(
			{
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

	removeItem = (id, image) => {
		console.log(this.state, id);
		// console.log('item removed')
		let tempCart = [ ...this.state.cart ];
		tempCart = tempCart.filter((item) => {
			console.log(item, image, id, item.id, item.image, item.id === id, item.image === image);
			return item.id !== id || item.image !== image;
		});

		console.log(tempCart);

		this.setState({
			cart: tempCart
		});
	};

	clearCart = (id) => {
		console.log('cart was cleared');
	};

	// this is the state that needs to be lifted up from the products list so that we can access it in details page 
	// checkIfCerealInCart = (eachCereal, cart) => {
	// 	// console.log(cart);
	// 	for (let c = 0; c < cart.length; c++) {
	// 		let cereal = cart[c];
	// 		// console.log(cereal.image, eachCereal.image, cereal.image === eachCereal.image);
	// 		if (cereal.image === eachCereal.image) {
	// 			//found a match
	// 			// console.log('match');
	// 			return true;
	// 		}
	// 		// console.log('no match');
	// 		return false;
	// 	}
	// }

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
					closeModal: this.closeModal,
					removeItem: this.removeItem,
					clearCart: this.clearCart,
					// checkIfCerealInCart: this.checkIfCerealInCart
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
