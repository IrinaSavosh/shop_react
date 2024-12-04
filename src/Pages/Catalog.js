import React, { useState } from "react";
import Header from "../Components/Header";
import Breadcrumbs from "../Components/Breadcrumbs";
import FilterSort from "../Components/FilterSort";
import ProductList from "../Components/ProductList";
import Advantages from "../Components/Advantages";
import Footer from "../Components/Footer";
import PageNumbers from "../Components/PageNumbers";
import "../styles/style-catalog.scss";

const Catalog = () => {
	const [sizeFilter, setSizeFilter] = useState([]); 

	const handleSizeFilterChange = (size) => {
		setSizeFilter(
			(prev) =>
				prev.includes(size)
					? prev.filter((s) => s !== size) 
					: [...prev, size] 
		);
	};

	return (
		<div>
			<Header />
			<Breadcrumbs />
			<FilterSort onSizeChange={handleSizeFilterChange} />
			<ProductList sizeFilter={sizeFilter} />
			{/* <PageNumbers/> */}
			<Advantages />
			<Footer />
		</div>
	);
};

export default Catalog;
