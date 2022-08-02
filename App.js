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
import { TextInput } from "react-native";
import Navbar from "./assets/Components/navbar";
import { getCards } from "./cardsGenerator";

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				backgroundColor: "#fee715",
			}}
		>
			<Players numPlayers={4} names={["Maciuś", "Krzyś"]} isTop={true} />
			{/* up^ wystarczy wyciagac dlugosc listy z tego menu od dodawania graczy,
			pozniej prosta matma zeby wiedziec ile graczy na dol ile na gore */}
			<View
				style={{
					width: "100%",
					height: "80%",
				}}
				className="cardContainer"
				nativeID="cardcontainer"
			>
				<Swiper
					containerStyle={{
						overflow: "hidden",
					}}
					cardStyle={{
						display: "flex",
						width: "100%",
						height: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}
					cardVerticalMargin={0}
					cardHorizontalMargin={0}
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
				></Swiper>
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
		backgroundColor: "fee715",
	},
	cardContainer: {
		display: "flex",
		float: "left",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		height: "780px",
		width: "1420px",
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
