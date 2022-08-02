import React from "react";
import Swiper from "react-native-deck-swiper";
import Card from "./assets/Components/Card";
import Players from "./assets/Components/Players";
import { getCards } from "./cardsGenerator";
import { View } from "react-native";

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				backgroundColor: "#fee715",
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
