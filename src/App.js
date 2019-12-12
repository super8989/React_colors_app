import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import NewPaletteForm from "./NewPaletteForm";

import { generatePalette } from "./colorHelpers";

class App extends Component {
	constructor(props) {
		super(props);
		this.savePalette = this.savePalette.bind(this);
	}

	findPalette(id) {
		return seedColors.find(function(palette) {
			return palette.id === id;
		});
	}

	savePalette(newPalette) {
		console.log(newPalette);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/palette/new'
					render={routeProps => (
						<NewPaletteForm savePalette={this.savePalette} {...routeProps} />
					)}
				/>
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					render={routeProps => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(
								this.findPalette(routeProps.match.params.paletteId)
							)}
						/>
					)}
				/>
				<Route
					exact
					path='/'
					render={routeProps => (
						<PaletteList palettes={seedColors} {...routeProps} />
					)}
				/>
				<Route
					exact
					path='/palette/:id'
					render={routeProps => (
						<Palette
							palette={generatePalette(
								this.findPalette(routeProps.match.params.id)
							)}
						/>
					)}
				/>
			</Switch>

			// <div className='App'>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div>
		);
	}
}

export default App;
