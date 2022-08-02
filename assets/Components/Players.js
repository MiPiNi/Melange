import React, { Component } from "react";
import { render } from "react-dom";
import image from "../imgs/player_in_game.png";
import { Text } from "react-native-web";
import { View } from "react-native-web";
import { IconButton, Button } from "@mui/material";

function toggleNavbar() {
	alert("toggleNavbar");
}

function NavbarBtn() {
	return (
		<View
			style={{
				margin: "auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Button
				onClick={toggleNavbar}
				style={{
					backgroundColor: "transparent",
					marginLeft: "10%",
				}}
			>
				<img src={require("../imgs/roll_out.png")}></img>
			</Button>
		</View>
	);
}

function Player(props) {
	return (
		<>
			<View
				className="player"
				style={{
					margin: "auto",
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
						fontSize: "2vh",
						maxWidth: "265px",
						maxHeight: "85px",
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
	const isTop = props.isTop;
	const players = createPlayers(numPlayers, props);

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "center safe",
				gridTemplate: "87px 273px",
				width: "100%",
				margin: "0 auto",
			}}
		>
			{players}
			{isTop ? <NavbarBtn /> : null}
		</View>
	);
}
Players.defaultProps = {
	numPlayers: 4,
	names: [1, 2, 3, 4],
	isTop: false,
};
