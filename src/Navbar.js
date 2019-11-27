import React, { Component } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		const { level, changeLevel } = this.props;

		return (
			<header className='Navbar'>
				<div className='logo'>
					<a href='#'>Color Picker</a>
				</div>
				<div className='slider-container'>
					<span>Level: {level}</span>
				</div>
				<div className='slider'>
					<Slider
						defaultValue={level}
						min={100}
						max={900}
						step={100}
						onAfterChange={changeLevel}
					/>
				</div>
				<div className='select-container'>
					<Select>
						<MenuItem value='hex'>Hex #fff</MenuItem>
						<MenuItem value='rgb'>RGB 255 255 255</MenuItem>
						<MenuItem value='rbga'>RGBA 255 255 255 1.0</MenuItem>
					</Select>
				</div>
			</header>
		);
	}
}

export default Navbar;
