import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, View } from "react-native";
import image from "../imgs/Avers.png";

export default function Card(props) {
	return (
		<div
			style={{
				height: "90%",
				width: "80%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
			}}
		>
			<h1
				style={{
					margin: "0",
					padding: "0",
					textAlign: "center",
					fontSize: 50,
				}}
			>
				{props.card}
			</h1>
		</div>
	);
}
