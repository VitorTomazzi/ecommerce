import React, { Component } from 'react';
import Product from './Product.jsx';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';
import { data } from '../cereal';
// import Search from './Search';

export default class ProductList extends Component {
	// not using state atm because we're using Context-Api to pass down all the data to every component
	state = {
		searchCereal: data
	};

	searchCereal = (e) => {
		// console.log(e.target.value);
		let search = e.target.value;

		let filtered = data.filter((entry) => {
			return entry.name.toLowerCase().includes(search.toLowerCase());
		});
		this.setState({
			searchCereal: filtered
		});
	};

	showCereal = (value) => {
		/* console.log(value); gives us all the data values */
		/* cereal is the key prop from context with all the info that we pass to each child component */
		return value.cereal.map((eachCereal, i) => {
			return <Product key={i} cereal={eachCereal} />;
		});
	};

	render() {
		return (
			<React.Fragment>
				{/* <div className="col-10 mx-auto col-md-8 mt-5 mb-5">
					<form>
						<input
							// value={this.state.filteredCereal}
							onChange={this.searchCereal}
							placeholder="Search"
							id="search"
							type="text"
							name="search"
						/>
					</form>
				</div> */}

				<ProductWrapper className="container" style={{ border: '.2rem solid blue' }}>
					<div className="row">
						{/* this is where the data from the Context gets passed into */}
						{/* now we map through data array called value in this case, 
						with map and return all the data values we want  */}
						<ProductConsumer>
							<div className="col-10 mx-auto col-md-8 mt-5 mb-5">
								<form>
									<input
										// value={this.state.filteredCereal}
										onChange={this.searchCereal}
										placeholder="Search"
										id="search"
										type="text"
										name="search"
									/>
								</form>
							</div>

							{this.showCereal}
						</ProductConsumer>
					</div>
				</ProductWrapper>
			</React.Fragment>
		);
	}
}

// I want to use a search function to filter out the cereals as the user types a cereal brand

const ProductWrapper = styled.div`border: .2rem solid blue;`;
