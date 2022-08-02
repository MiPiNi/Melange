import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, View } from "react-native";
import image from "../imgs/Avers.png";

function Averse() {
	return <img src={image} style={{ pointerEvents: "none" }}></img>;
}

export default function Card(props) {
	return (
		<>
			<Averse />
			<Text
				style={{
					fontSize: "5vh",
					color: "white",
					textAlign: "center",
					userSelect: "none",
					position: "absolute",
					maxWidth: "1390px",
				}}
			>
				{props.card}
			</Text>
		</>
	);
}
