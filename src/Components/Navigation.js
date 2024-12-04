import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";
import Registration from "../Pages/Registration";
import ProductPage from "../Pages/ProductPage";
import Cart from '../Pages/Cart';

export default class Navigation extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/catalog" element={<Catalog />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/cart" element={<Cart />} />
					<Route exact path="/registration" element={<Registration />} />
				</Routes>
			</Router>
		);
	}
}
