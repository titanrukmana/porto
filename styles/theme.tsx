import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: `"Karla", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

theme.typography.h1 = {
	fontSize: "96px",
	[theme.breakpoints.down("md")]: {
		fontSize: "48px",
	},
};

theme.typography.h6 = {
	fontSize: "20px",
	[theme.breakpoints.down("md")]: {
		fontSize: "14px",
	},
};

theme.typography.h3 = {
	fontSize: "48px",
	[theme.breakpoints.down("md")]: {
		fontSize: "24px",
	},
};

theme.typography.body2 = {
	fontSize: "14px",
	[theme.breakpoints.down("md")]: {
		fontSize: "10px",
	},
};
