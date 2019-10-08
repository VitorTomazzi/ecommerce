import React, { Component } from 'react';
import Product from './Product.jsx';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';
// import { data } from '../cereal'

export default class ProductList extends Component {
	// not using state atm because we're using Context-Api to pass down all the data to every component
	// state = {
	// 	cereal: data
	// };

	render() {
		// console.log(this.state.product);

		return (
			<React.Fragment>
				<ProductWrapper className="container" style={{ border: '.2rem solid blue' }}>
					<div className="row">
						{/* this is where the data from the Context gets passed into */}
						{/* now we map through data array called value in this case, 
						with map and return all the data values we want  */}
							<ProductConsumer>
								{(value) => {
									/* console.log(value); gives us all the data values */
									/* cereal is the prop with all the info that we pass to each child component */
									return value.cereal.map((eachCereal, i) => {
										return <Product key={i} cereal={eachCereal} />;
									});
								}}
							</ProductConsumer>
					</div>
				</ProductWrapper>
			</React.Fragment>
		);
	}
}

const ProductWrapper = styled.div`
	border: .2rem solid blue;
`;
