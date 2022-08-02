import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, View } from "react-native";
import image from "../imgs/Avers.png";

function Averse() {
	return (
		<Image
			source={require("../imgs/Avers.png")}
			style={{ height: "80%", width: "80%" }}
			resizeMode={"contain"}
		></Image>
	);
}

export default function Card(props) {
	const { fontScale } = useWindowDimensions();
	return (
		<>
			<Averse />
			<Text selectable={false} style={styles(fontScale).cardText}>
				{props.card}
			</Text>
		</>
	);
}

const styles = (fontScale) =>
	StyleSheet.create({
		cardText: {
			fontSize: 50 / fontScale,
			color: "white",
			textAlign: "center",
			position: "absolute",
			maxWidth: 1300,
		},
	});
