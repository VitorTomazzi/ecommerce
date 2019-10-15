import React, { Component } from 'react'
import styled from 'styled-components';

export default class CartColumns extends Component {
    render() {
        return (
            <React.Fragment>
                <Columns className="container d-none d-lg-block text-center my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Products</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Name</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p>Remove</p>
                        </div>
                    </div>
                </Columns>
            </React.Fragment>
        )
    }
}

const Columns = styled.div`
	font-family: 'Bitter', serif;
    font-size: 1.3rem;
`;


