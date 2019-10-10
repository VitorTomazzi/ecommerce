import React, { Component } from 'react';
import Cereal from './Cereal.jsx';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';
// import { data } from '../cereal';
// import Search from './Search';

export default class CerealList extends Component {
	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => (
						<div>
							<CerealTitle>
								<h1>Pick your favorite cereal</h1>
							</CerealTitle>

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

const CerealTitle = styled.div`text-align: center;

`;

const CerealListWrapper = styled.div`
	border: .2rem solid blue;
	display: flex;
	flex-wrap: wrap;
`;

const Search = styled.div`
	border: .2rem solid red;
	form {
		display: flex;
		justify-content: center;
	}
	input {
		width: 30vw;
	}
`;
