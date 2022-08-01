import React, { Component } from "react";
import { render } from "react-dom";
import Player from "./Player";

export default function PlayerLine(props) {
	const numPlayers = props.numPlayers;
	return (
		<div
			style={{
				display: "grid",
				gap: "1%,80%",
				width: "100%",
				height: "10%",
			}}
		>
			{() => {
				for (let i = 0; i < numPlayers; i++) {
					//let name = getFromNavBar() cos w tym stylu trzeba
					render(<Player name={"Maciuś lat 12"} />);
				}
			}}
		</div>
	);
}
