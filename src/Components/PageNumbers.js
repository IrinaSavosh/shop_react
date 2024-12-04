import React from "react";

const PageNumbers = () => {
	return (
		<nav className="page-numbers">
			<a href="#">
				<svg width="8.000000" height="14.000000" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<desc>Created with Pixso.</desc>
					<defs />
					<path
						id="Vector"
						d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z"
						fill="#000000"
						fill-opacity="1.000000"
						fill-rule="nonzero"
					/>
				</svg>
			</a>
			<a className="page-numbers__current-page" href="#">
				1
			</a>
			<a className="page-numbers__color" href="#">
				2
			</a>
			<a className="page-numbers__color" href="#">
				3
			</a>
			<a className="page-numbers__color" href="#">
				4
			</a>
			<a className="page-numbers__color" href="#">
				5
			</a>
			<a className="page-numbers__color" href="#">
				6
			</a>
			<p>......</p>
			<a className="page-numbers__color" href="#">
				20
			</a>
			<a href="#">
				<svg width="8.000000" height="14.000000" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<desc>Created with Pixso.</desc>
					<defs />
					<path
						id="Vector"
						d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z"
						fill="#000000"
						fill-opacity="1.000000"
						fill-rule="nonzero"
					/>
				</svg>
			</a>
		</nav>
	);
};

export default PageNumbers;
