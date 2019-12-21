import sizes from "./sizes";

export default {
	root: {
		backgroundColor: "lightblue",
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		overflow: "scroll"
	},
	container: {
		width: "60%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("lg")]: {
			width: "70%"
		},
		[sizes.down("xs")]: {
			width: "50%"
		}
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white",
			textDecoration: "none"
		}
	},
	palettes: {
		boxSizing: "broder-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "2.5rem",
		[sizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)"
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)"
		}
	}
};
