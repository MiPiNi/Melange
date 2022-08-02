import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, View } from "react-native";
import image from "../imgs/Avers.png";

export default function Card(props) {
	return (
		<View
			style={{
				height: "778px",
				width: "1419px",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
			}}
		>
			<Text
				style={{
					textAlign: "center",
					fontSize: "6vh",
					userSelect: "none",
				}}
			>
				{props.card}
			</Text>
		</View>
	);
}
