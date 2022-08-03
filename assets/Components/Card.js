import React, { Component } from "react";
import * as Font from "expo-font";
import {
	Text,
	View,
	Dimensions,
	StyleSheet,
	Image,
	PixelRatio,
	Platform,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
	const newSize = size * scale;
	if (Platform.OS === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	}
}

export default class Card extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {
		fontsLoaded: false,
	};

	async loadFonts() {
		await Font.loadAsync({
			// Load a font `Montserrat` from a static resource
			Montserrat: require("../fonts/Montserrat.ttf"),
		});
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this.loadFonts();
	}
	render() {
		return (
			<View
				style={{
					display: "flex",
					width: "100%",
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={require("../imgs/Avers.png")}
					style={{ height: "80%", width: "80%" }}
					resizeMode={"contain"}
				></Image>
				<Text selectable={false} style={styles.cardText}>
					{this.props.card}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cardText: {
		fontFamily: "Montserrat",
		width: "50%",
		flexWrap: "wrap",
		fontSize: normalize(14),
		color: "white",
		textAlign: "center",
		position: "absolute",
	},
});
