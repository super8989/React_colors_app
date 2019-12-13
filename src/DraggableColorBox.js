import React from "react";

import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-3.5px"
	},
	boxContent: {
		position: "absolute",
		width: "100%",
		left: "0px",
		bottom: "0px",
		padding: "10px",
		color: "black",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
		display: "flex",
		justifyContent: "space-between"
	}
};

function DraggableColorbox(props) {
	const { classes } = props;

	return (
		<div className={classes.root} style={{ backgroundColor: props.color }}>
			<div className={classes.boxContent}>
				<span>{props.name}</span>
				<DeleteIcon className={classes.delete} />
			</div>
		</div>
	);
}

export default withStyles(styles)(DraggableColorbox);
