import React, { Component } from "react";
import { ImageBackground, Text } from "react-native-web";

export default function Player(props) {
	return (
		<div style={{ width: "273px", height: "87px" }}>
			<ImageBackground source={require("../imgs/player_in_game.png")}>
				<Text>{props.name}</Text>
			</ImageBackground>
		</div>
	);
}
