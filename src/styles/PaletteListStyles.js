import sizes from "./sizes";
import bg from "./bg.svg";

export default {
	"@global": {
		".fade-exit": {
			opacity: 1
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease-out"
		}
	},

	root: {
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		overflow: "scroll",
		/* background by SVGBackgrounds.com */
		backgroundColor: "#4e6bd4",
		backgroundImage: `url(${bg})`
	},

	heading: {
		fontSize: "1.5rem",
		[sizes.down("xs")]: {
			fontSize: "1rem"
		}
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
			textDecoration: "none",
			[sizes.down("xs")]: {
				fontSize: "0.8rem"
			}
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
