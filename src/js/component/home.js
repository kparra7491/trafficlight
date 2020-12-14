import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="trafficlight">
				<div
					className={
						this.props.currentLight == "red" ? "red on" : "red"
					}
				/>
				<div
					className={
						this.props.currentLight == "yellow"
							? "yellow on"
							: "yellow"
					}
				/>
				<div
					className={
						this.props.currentLight == "green"
							? "green on"
							: "green"
					}
				/>
			</div>
		);
	}
}

Home.propTypes = {
	currentLight: PropTypes.string
};
