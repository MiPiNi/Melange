import React from "react";
import image from "../imgs/player_in_game.png";
import { Text, View, Image, StyleSheet } from "react-native";
import Button from "@mui/material/Button";

function toggleNavbar() {
	alert("toggleNavbar");
}

const NavbarBtn = () => {
	return (
		<View styles={styles.btnView}>
			<Button onClick={toggleNavbar} styles={styles.btn}>
				<Image source={require("../imgs/roll_out.png")}></Image>
				{/* <img src={require("../imgs/roll_out.png")}></img>*/}
			</Button>
		</View>
	);
};

function Player(props) {
	return (
		<>
			<View className="player" style={styles.playerView}>
				<Text style={styles.playerText}>{props.name}</Text>
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
		<View style={styles.playersListView}>
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

const styles = StyleSheet.create({
	btnView: {
		margin: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	btn: {
		backgroundColor: "transparent",
		marginLeft: "10%",
	},
	playerView: {
		margin: "auto",
		display: "flex",
		width: "273px",
		height: "87px",
		alignItems: "center",
		justifyContent: "center",
		backgroundImage: `url(${image})`,
	},
	playerText: {
		color: "lightgoldenrodyellow",
		maxWidth: "265px",
		maxHeight: "85px",
	},
	playersListView: {
		flexDirection: "row",
		justifyContent: "center safe",
		gridTemplate: "87px 273px",
		width: "100%",
		margin: "0 auto",
	},
});
