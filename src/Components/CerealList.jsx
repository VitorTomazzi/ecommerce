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
									<div className="wrap">
										<div className="search">
											<input
												name="search"
												id="search"
												onChange={value.searchCereal}
												type="text"
												className="searchTerm"
												placeholder="What are you looking for?"
											/>
											<button type="submit" className="searchButton">
												<i className="fa fa-search" />
											</button>
										</div>
									</div>
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

const CerealTitle = styled.div`
	text-align: center;
	font-family: 'Luckiest Guy', cursive;
	margin-top: 2rem;
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
		border-radius: .1rem;
	}
	h4 {
		text-align: center;
	}
	@import url(https://fonts.googleapis.com/css?family=Open+Sans);

	body {
		background: #f2f2f2;
		font-family: 'Open Sans', sans-serif;
	}

	.search {
		width: 100%;
		position: relative;
		display: flex;
	}

	.searchTerm {
		width: 100%;
		border: 3px solid #00b4cc;
		border-right: none;
		padding: 5px;
		height: 20px;
		border-radius: 5px 0 0 5px;
		outline: none;
		color: #9dbfaf;
	}

	.searchTerm:focus {
		color: #00b4cc;
	}

	.searchButton {
		width: 40px;
		height: 36px;
		border: 1px solid #00b4cc;
		background: #00b4cc;
		text-align: center;
		color: #fff;
		border-radius: 0 5px 5px 0;
		cursor: pointer;
		font-size: 20px;
	}

	/*Resize the wrap to see the search bar change!*/
	.wrap {
		width: 30%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
