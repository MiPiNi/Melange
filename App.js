import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { ImageBackground, TouchableWithoutFeedback } from "react-native-web";
import avers from "./assets/imgs/Avers.png";
import { TextInput } from "react-native";
import Navbar from "./components/navbar";

export default function App() {
	return (
		<div
		
			style={{
				flex: 1,
				backgroundColor: "#fee715",
			}}
			className="main"
		>
			<Navbar/>
			<div
				style={{
					float: "left",
					width: "100%",
					height: "10%",
				}}
				className="top"
			>
				TOP
			</div>
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
			<div
				style={{
					float: "left",
					width: "100%",
					height: "10%",
				}}
				className="bottom"
			>
				BOTTOM
			</div>
		</div>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		display: "inline",
		justifyContent: "center",
		backgroundColor: "fee715",
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
		width: "90%",
		height: "80%",
		justifyContent: "center",
	},
	card: {
		height: "780px",
		width: "1420px",
		justifyContent: "center",
		backgroundImage: `url(${avers})`,
		backgroundSize: "100%",
	},
	text: {
		margin: "0",
		padding: "0",
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
