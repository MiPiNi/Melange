import { StatusBar } from "expo-status-bar";
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, TurboModuleRegistry, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { ImageBackground, TouchableWithoutFeedback } from "react-native-web";
import Player from "./assets/Components/Player";
import PlayersLine from "./assets/Components/PlayersLine";

import avers from "./assets/imgs/Avers.png";

export default function App() {
	return (
		<View style={styles.main}>
			{() => {
				const arr = [];
				for (let i = 0; i < numPlayers; i++) {
					//let name = getFromNavBar() cos w tym stylu trzeba
					arr.push(<Player name={"Maciuś lat 12"} />);
				}
				return <tbody>{arr}</tbody>;
			}}
			<div
				style={{
					float: "left",
					width: "90%",
					height: "80%",
				}}
				className="cardContainer"
			>
				<Swiper
					cards={["test1", "test2", "test3", "test4", "test5"]}
					renderCard={(card) => {
						return (
							<View style={styles.card}>
								<Text style={styles.text}>{card}</Text>
							</View>
						);
					}}
					onSwiped={(cardIndex) => {
						console.log(cardIndex);
					}}
					onSwipedLeft={() => {
						console.log("Swiped left!");
					}}
					onSwipedRight={() => {
						console.log("Swiped right!");
					}}
					cardIndex={0}
					verticalSwipe={false}
					backgroundColor={"transparent"}
					showSecondCard={false}
				></Swiper>
			</div>
			<div
				style={{
					float: "left",
					width: "10%",
					height: "80%",
				}}
				className="right"
			>
				{
					<img
						src={require("./assets/imgs/roll_out.png")}
						className="rollOut"
					></img>
				}
			</div>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		display: "inline",
		justifyContent: "center",
		backgroundImage: "radial-gradient(orange, lightyellow)",
	},
	top: {
		margin: "0",
		padding: "0",
		float: "left",
		width: "100%",
		height: "10%",
	},
	cardContainer: {
		display: "grid",
		float: "left",
		width: "1420px",
		height: "780px",
		justifyContent: "center",
	},
	card: {
		width: "1420px",
		height: "780px",
		justifyContent: "center",
		backgroundImage: `url(${avers})`,
		backgroundSize: "cover",
	},
	text: {
		height: "300px",
		width: "500px",
		justifyContent: "center",
		textAlign: "center",
		fontSize: 50,
		color: "white",
	},
	right: {
		margin: "0",
		padding: "0",
		float: "left",
		width: "10%",
		height: "80%",
	},
	bottom: {
		margin: "0",
		padding: "0",
		float: "left",
		width: "100%",
		height: "10%",
	},
});
