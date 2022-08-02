import React, { Component } from "react";
import { View } from "react-native-web";
import { Image } from "react-native-web";
import bg from "../imgs/roll_out.png";
import { IconButton, Button } from "@mui/material";

function toggleNavbar() {
	alert("toggleNavbar");
}

export default function NavbarHolder() {
	return (
		<View
			style={{
				position: "fixed",
				right: "1rem",
				top: "1.5rem",
				width: "10%",
				height: "100%",
				margin: "0",
			}}
		>
			<Button
				onClick={toggleNavbar}
				style={{
					backgroundColor: "transparent",
					margin: "0",
					padding: "0",
				}}
			>
				<img src={require("../imgs/roll_out.png")}></img>
			</Button>
		</View>
	);
}
