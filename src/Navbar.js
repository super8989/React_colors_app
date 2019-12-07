import React, { Component } from "react";
import { Link } from "react-router-dom";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";

import Slider from "rc-slider";

import "rc-slider/assets/index.css";

const styles = {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "6vh"
	},

	logo: {
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "22px",
		backgroundColor: "#eceff1",
		fontFamily: "Roboto",
		height: "100%",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black"
		}
	},

	slider: {
		width: "340px",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-rail": {
			height: "8px"
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
			backgroundColor: "limegreen",
			outline: "none",
			border: "2px solid forestgreen",
			boxShadow: "none",
			marginTop: "-3px"
		}
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem"
	}
};

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: "hex", open: false };
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleFormatChange(e) {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(e.target.value);
	}

	closeSnackbar() {
		this.setState({ open: false });
	}

	render() {
		const { level, changeLevel, showingAllColors, classes } = this.props;
		const { format } = this.state;

		return (
			<header className={classes.Navbar}>
				<div className={classes.logo}>
					<Link to='/'>Color Picker</Link>
				</div>

				{showingAllColors && (
					<div>
						<span>Level: {level}</span>
						<div className={classes.slider}>
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={changeLevel}
							/>
						</div>
					</div>
				)}

				<div className={classes.selectContainer}>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value='hex'>Hex: #ffffff </MenuItem>
						<MenuItem value='rgb'>RGB: rgb(255, 255, 255)</MenuItem>
						<MenuItem value='rgba'>RGBA: rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={this.state.open}
					autoHideDuration={3000}
					message={
						<span id='message-id'>
							Format Changed to {format.toUpperCase()}
						</span>
					}
					ContentProps={{ "aria-describedby": "message-id" }}
					onClose={this.closeSnackbar}
					action={[
						<IconButton
							onClick={this.closeSnackbar}
							color='inherit'
							key='close'
							aria-label='close'
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}

export default withStyles(styles)(Navbar);
