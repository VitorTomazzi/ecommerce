import React, { Component } from 'react';
import { data } from './cereal'

const ProductContext = React.createContext();
//context object always comes with two components: a provider and consumer

class ProductProvider extends Component {
    state = {
        cereal : data
    }

    handleDetail = () => { 
        console.log('hello from handledetail')
    }

    addToCart = () => {
        console.log('hello from addtocart')
    }

	render() {
		return <ProductContext.Provider value={{
            // destructured allows us to get ALL properties in data
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart: this.addToCart
        }}>
        {this.props.children}
        </ProductContext.Provider>;
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
