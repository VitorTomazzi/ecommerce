import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">
						E-Store
					</Link>
					<Link className="nav-item nav-link active" to="/product-list">
						Product List
					</Link>
					<Link className="nav-item nav-link" to="/cart">
						Shopping Cart
					</Link>
					{/* <Link className="nav-item nav-link" to="#">
						<p>E-Store</p>
					</Link>
					<Link className="nav-item nav-link disabled" to="#" aria-disabled="true">
						<p>E-Store</p>
					</Link> */}
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;
