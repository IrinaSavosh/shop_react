import React from "react";

const ProductMain = ({ product }) => {
	return (
		<div className="main-product center">
			<button className="main-product__left-button"></button>

			<img className="" src={product.image} alt={product.name} />

			<button className="main-product__right-button"></button>
		</div>
	);
};

export default ProductMain;
