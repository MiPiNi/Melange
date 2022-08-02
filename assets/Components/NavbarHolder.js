import React, { Component } from "react";
import { Button } from "react-native-web";
import { View } from "react-native-web";
import { Image } from "react-native-web";

export default function NavbarHolder() {
	return (
		<View
			style={{
				float: "left",
				flexDirection: "column",
				width: "100%",
				height: "100%",
			}}
			className="right"
			accesibilityRole={"imagebutton"}
		>
			{
				<img
					src={require("../imgs/roll_out.png")}
					className="rollOut"
				></img>
			}
		</View>
	);
}
