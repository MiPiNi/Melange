import React from "react";
import { View, ImageBackground } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./assets/Components/Card";
import { getCards } from "./cardsGenerator";
import * as ScreenOrientation from "expo-screen-orientation";

async function changeScreenOrientation() {
	await ScreenOrientation.lockAsync(
		ScreenOrientation.OrientationLock.LANDSCAPE
	);
}

export default function App() {
	changeScreenOrientation();
	let isFirstSwipe = true;
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
						animateCardOpacity={true}
						cards={getCards(isFirstSwipe)}
						renderCard={(card) => {
							return (
								<Card card={card} isFirstSwipe={isFirstSwipe} />
							);
						}}
						onSwiped={() => {
							isFirstSwipe = false;
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
