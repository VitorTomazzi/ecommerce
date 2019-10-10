// import React, { Component } from 'react';
// import Glue from './Glue.jsx';
// import { ProductConsumer } from '../Context';
// import styled from 'styled-components';
// // import { data } from '../glue'; make glue DB
// // import Search from './Search';

// export default class GlueList extends Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<ProductConsumer>
// 					{(value) => (

// 						<div>
// 							<GlueTitle>
// 								<h1>Pick your favorite Glue</h1>
// 							</GlueTitle>

// 							<Search className="col-10 mx-auto col-md-8 mt-5 mb-5">
// 								<form>
// 									<input
// 										// value={this.state.filteredGlue}
// 										onChange={value.searchGlue}
// 										placeholder="Search"
// 										id="search"
// 										type="text"
// 										name="search"
// 									/>
// 								</form>
// 							</Search>

// 							<GlueListWrapper>
// 								{value.glue.map((eachGlue, i) => {
// 									return <Glue key={i} glue={eachGlue} />;
// 								})}
// 							</GlueListWrapper>
// 						</div>
// 					)}
// 				</ProductConsumer>
// 			</React.Fragment>
// 		);
// 	}
// }

// const GlueTitle = styled.div`text-align: center;

// `;

// const GlueListWrapper = styled.div`
// 	border: .2rem solid blue;
// 	display: flex;
// 	flex-wrap: wrap;
// `;

// const Search = styled.div`
// 	border: .2rem solid red;
// 	form {
// 		display: flex;
// 		justify-content: center;
// 	}
// 	input {
// 		width: 30vw;
// 	}
// `;
