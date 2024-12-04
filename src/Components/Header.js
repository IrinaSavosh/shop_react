import React from "react";
import Logo from "../img/Logo.svg";
import Search from "../img/Search.svg";
import Burger from "../img/Burger.svg";
import Сabinet from "../img/Сabinet.svg";
import Сart from "../img/Сart.svg";

const Header = () => (
	<header className="header center">
		<div className="header__block_left">
			<a href="/">
				<img src={Logo} />
			</a>
			<img src={Search} alt="Search" />
		</div>
		<div className="header__block_right">
			<button>
				<img src={Burger} alt="Menu" />
			</button>
			<a className="hide" href="/registration">
				<img src={Сabinet} alt="Cabinet" />
			</a>
			<button className="hide">
				<a  href="/cart">
					<img src={Сart} alt="Сart" />
				</a>
			</button>
		</div>
	</header>
);

export default Header;
