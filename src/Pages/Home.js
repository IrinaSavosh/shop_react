import React, { Component } from "react";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Advantages from "../Components/Advantages";
import Footer from "../Components/Footer";

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<MainSection />
				<Categories />
				<Products />
				<Advantages />
				<Footer />
			</div>
		);
	}
}
