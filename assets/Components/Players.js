import React, { Component } from "react";
import { render } from "react-dom";
import image from "../imgs/player_in_game.png";
import { Text } from "react-native-web";
import { View } from "react-native-web";

function Player(props) {
	return (
		<>
			<View
				className="player"
				style={{
					margin: "0",
					display: "flex",
					width: "273px",
					height: "87px",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage: `url(${image})`,
				}}
			>
				<Text
					style={{
						color: "lightgoldenrodyellow",
					}}
				>
					{props.name}
				</Text>
			</View>
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

export default function Players(props) {
	const numPlayers = props.numPlayers;
	const names = props.names;
	const players = createPlayers(numPlayers, props);

	return (
		<View
			style={{
				flexDirection: "row",
				height: "auto",
				gap: "1%",
				justifyContent: "center",
				gridTemplate: "87px 273px",
				width: "100%",
				height: "10%",
			}}
		>
			{players}
		</View>
	);
}
Players.defaultProps = {
	numPlayers: 4,
	names: [1, 2, 3, 4],
};
