//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
var currentLight = "";

function runLight() {
	if (currentLight == "green") {
		currentLight = "yellow";
	} else if (currentLight == "yellow") {
		currentLight = "red";
	} else {
		currentLight = "green";
	}

	ReactDOM.render(
		<Home currentLight={currentLight} />,
		document.querySelector("#app")
	);
}

//render your react application

setInterval(runLight, 3000);
