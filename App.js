import { StatusBar } from "expo-status-bar";
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, TurboModuleRegistry, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { ImageBackground, TouchableWithoutFeedback } from "react-native-web";
import Card from "./assets/Components/Card";
import NavbarHolder from "./assets/Components/NavbarHolder";
import Players from "./assets/Components/Players";
import avers from "./assets/imgs/Avers.png";
import { getCards } from "./cardsGenerator.js";

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				display: "inline",
				justifyContent: "center",
				backgroundImage: "radial-gradient(orange, lightyellow)",
			}}
		>
			<Players numPlayers={4} names={["Maciuś", "Krzyś"]} />
			{/* up^ wystarczy wyciagac dlugosc listy z tego menu od dodawania graczy,
			pozniej prosta matma zeby wiedziec ile graczy na dol ile na gore */}
			<View
				style={{
					float: "left",
					width: "90%",
					height: "80%",
				}}
				className="cardContainer"
				nativeID="cardcontainer"
			>
				<Swiper
					containerStyle={{
						height: "100%",
						width: "100%",
						overflow: "hidden",
					}}
					cards={getCards()}
					renderCard={(card) => {
						return <Card card={card} />;
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
			</View>
			<View style={{ width: "10%", height: "80%" }}>
				<button
					style={{
						border: "none",
					}}
					onClick={console.log("clicked")}
				>
					<NavbarHolder />
				</button>
			</View>

			<Players numPlayers={4} />
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
	cardContainer: {
		display: "flex",
		float: "left",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		display: "flex",
		width: "50%",
		height: "60%",
		alignItems: "center",
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
});
