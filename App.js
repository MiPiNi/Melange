import React from "react";
import { StyleSheet, Text, TurboModuleRegistry, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./assets/Components/Card";
import avers from "./assets/imgs/Avers.png";
import { getCards } from "./cardsGenerator";
import bgimage from "./assets/imgs/background_image.png";

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				backgroundColor: "#fee715",
				backgroundImage: `url(${bgimage})`,
			}}
		>
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
						overflow: "visible",
					}}
					cardStyle={{
						fontFamily: "Montserrat, sans-serif",
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
