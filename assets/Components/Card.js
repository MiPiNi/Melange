import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Card extends Component {
	render() {
		return (
			<View
				style={{
					margin: "0",
					padding: "0",
					borderRadius: 4,
					borderWidth: 2,
					borderColor: "#E8E8E8",
					justifyContent: "center",
					backgroundImage: "url('./assets/imgs/Avers.png')",
				}}
			>
				<Text
					style={{
						margin: "0",
						padding: "0",
						textAlign: "center",
						fontSize: 50,
					}}
				>
					{card}
				</Text>
			</View>
		);
	}
}
