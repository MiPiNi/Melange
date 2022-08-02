import React from "react";
// import "./Navbar.css";

function Navbar() {
	return (
		<nav className="nav">
			<button className="back"></button>
			<button className="reset"></button>

			<input
				type="text"
				className="nick"
				placeholder="name"
				maxLength={8}
			/>
			<button className="add_player"></button>
			<div className="player_bar"></div>
		</nav>
	);
}
export default Navbar;
