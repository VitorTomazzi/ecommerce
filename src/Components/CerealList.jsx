import React, { Component } from 'react';
import Cereal from './Cereal.jsx';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';
// import { data } from '../cereal';
// import Search from './Search';

export default class CerealList extends Component {
	// not using state atm because we're using Context-Api to pass down all the data to every component
	// state = {
	// 	searchCereal: data
	// };

	// searchCereal = (e) => {
	// 	// console.log(e.target.value);
	// 	let search = e.target.value;

	// 	let filtered = data.filter((entry) => {
	// 		return entry.name.toLowerCase().includes(search.toLowerCase());
	// 	});
	// 	this.setState({
	// 		searchCereal: filtered
	// 	});
	// };

	// showCereal = (value) => {
	// 	console.log('val', value);
	// 	/* console.log(value); gives us all the data values */
	// 	/* cereal is the key prop from context with all the info that we pass to each child component */
	// 	return this.state.searchCereal.map((eachCereal, i) => {
	// 		return <Cereal key={i} cereal={eachCereal} />;
	// 	});
	// };

	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => (
						<div>
							<Search className="col-10 mx-auto col-md-8 mt-5 mb-5">
								<form>
									<input
										// value={this.state.filteredCereal}
										onChange={value.searchCereal}
										placeholder="Search"
										id="search"
										type="text"
										name="search"
									/>
								</form>
							</Search>

							<CerealListWrapper>
								{value.cereal.map((eachCereal, i) => {
									return <Cereal key={i} cereal={eachCereal} />;
								})}
							</CerealListWrapper>
						</div>
					)}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

const CerealListWrapper = styled.div`
	border: .2rem solid blue;
	display: flex;
	flex-wrap: wrap;
`;

const Search = styled.div`border: .2rem solid red;`;
