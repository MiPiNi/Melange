import React, { Component } from "react";
import { Button } from "react-native-web";

export default function NavbarHolder() {
	return (
		<div
			style={{
				float: "left",
				width: "10%",
				height: "80%",
			}}
			className="right"
		>
			{
				<img
					src={require("../imgs/roll_out.png")}
					className="rollOut"
				></img>
			}
		</div>
	);
}
