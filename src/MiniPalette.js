import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	main: {
		backgroundColor: "purple",
		border: "3px solid yellow"
	},
	secondary: {
		backgroundColor: "pink",
		"& h1": {
			color: "white",
			"& span": {
				backgroundColor: "yellow"
			}
		}
	}
};

function MiniPalette(props) {
	const { classes } = props;
	console.log(classes);

	return (
		<div className={classes.main}>
			<h1>Mini Palette</h1>
			<section className={classes.secondary}>
				<h1>
					Mini Palette secondary <span>inside h1</span>
				</h1>
				<span>outside h1</span>
			</section>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
