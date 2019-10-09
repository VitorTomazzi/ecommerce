// import React, { Component } from 'react';
// // import styled from 'styled-components';
// import { ProductConsumer } from '../Context';
// import { data } from '../cereal';

// export default class Search extends Component {
// 	state = {
// 		searchCereal: data
// 	};

// 	searchCereal = (e) => {
// 		// console.log(e.target.value);
// 		let search = e.target.value;

// 		let filtered = data.filter((entry) => {
// 			return entry.name.toLowerCase().includes(search.toLowerCase());
// 		});
// 		this.setState({
// 			searchCereal: filtered //: filteredFoods = same thing since the same word
// 		});
// 		// console.log(this.state) //its updating food entry in the console
// 	};

// 	render() {
// 		return (
// 			<React.Fragment>
// 				{/* <ProductConsumer> */}
// 				<div className="col-10 mx-auto col-md-8 mt-5 mb-5">
// 					<form>
// 						<input
// 							// value={this.state.filteredCereal}
// 							onChange={this.searchCereal}
// 							placeholder="Search"
// 							id="search"
// 							type="text"
// 							name="search"
// 						/>
// 					</form>
// 				</div>
// 				{/* </ProductConsumer> */}
// 			</React.Fragment>
// 		);
// 	}
// }
