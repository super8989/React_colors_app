import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { ChromePicker } from "react-color";

import styles from "./styles/ColorPickerFormStyles";

import chroma from "chroma-js";

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: "teal", newColorName: "" };
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", value =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule("isColorUnique", value =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: "" });
	}

	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;

		const isLightColor = chroma(currentColor).luminance() >= 0.5;

		return (
			<div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
					<TextValidator
						value={newColorName}
						className={classes.colorNameInput}
						placeholder='Color Name'
						name='newColorName'
						variant='filled'
						margin='normal'
						onChange={this.handleChange}
						validators={["required", "isColorNameUnique", "isColorUnique"]}
						errorMessages={[
							"Enter a colour name",
							"Colour name must be unique",
							"Colour already used"
						]}
					/>
					<Button
						variant='contained'
						type='submit'
						color='primary'
						disabled={paletteIsFull}
						className={classes.addColor}
						style={{
							backgroundColor: paletteIsFull ? "lightgrey" : currentColor
						}}
					>
						<span className={isLightColor && classes.addColorText}>
							{paletteIsFull ? "Palette Full" : "Add Colour"}
						</span>
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
