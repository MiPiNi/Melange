import React, { Component } from "react";
import { render } from "react-dom";
import image from "../imgs/player_in_game.png";

function Player(props) {
	return (
		<>
			<div
				className="player"
				style={{
					display: "flex",
					width: "273px",
					height: "87px",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage: `url(${image})`,
				}}
			>
				<h2
					style={{
						color: "lightgoldenrodyellow",
					}}
				>
					{props.name}
				</h2>
			</div>
		</>
	);
}
Player.defaultProps = {
	name: "placeHolder",
};

function createPlayers(num, props) {
	const arr = [];
	for (let i = 0; i < num; i++) {
		console.log("test");
		//let name = getFromNavBar() cos w tym stylu trzeba
		arr.push(<Player key={i} name={props.names[i]} />);
	}
	return arr;
}

export default function PlayerLine(props) {
	const numPlayers = props.numPlayers;
	const names = props.names;
	const players = createPlayers(numPlayers, props);

	return (
		<div
			style={{
				display: "flex",
				height: "87px",
				gap: "1%",
				justifyContent: "center",
				gridTemplate: "87px 273px",
				width: "100%",
				height: "10%",
			}}
		>
			{players}
		</div>
	);
}
PlayerLine.defaultProps = {
	numPlayers: 4,
	names: [1, 2, 3, 4],
};
