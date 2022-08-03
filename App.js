import React from "react";
import { View, ImageBackground } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./assets/Components/Card";
import { getCards } from "./cardsGenerator";
import bgimage from "./assets/imgs/background_image.png";

export default function App() {
	return (
		<ImageBackground
			source={require("./assets/imgs/background_image.png")}
			style={{ height: "100%", width: "100%" }}
		>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
				}}
			>
				<View
					style={{
						width: "100%",
						height: "100%",
					}}
					className="cardContainer"
					nativeID="cardcontainer"
				>
					<Swiper
						containerStyle={{
							overflow: "visible",
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
		</ImageBackground>
	);
}
