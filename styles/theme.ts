import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: `"Poppins", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

theme.typography.h1 = {
	fontSize: "96px",
	[theme.breakpoints.down("md")]: {
		fontSize: "35px",
	},
};

theme.typography.h2 = {
	fontSize: "60px",
	[theme.breakpoints.down("md")]: {
		fontSize: "30px",
	},
};

theme.typography.h3 = {
	fontSize: "48px",
	[theme.breakpoints.down("md")]: {
		fontSize: "20px",
	},
};

theme.typography.h5 = {
	fontSize: "24px",
	[theme.breakpoints.down("md")]: {
		fontSize: "18px",
	},
};

theme.typography.h6 = {
	fontSize: "20px",
	[theme.breakpoints.down("md")]: {
		fontSize: "12px",
	},
};

theme.typography.body1 = {
	fontSize: "16px",
	[theme.breakpoints.down("md")]: {
		fontSize: "13px",
	},
};

theme.typography.body2 = {
	fontSize: "14px",
	[theme.breakpoints.down("md")]: {
		fontSize: "12px",
	},
};

theme.typography.subtitle1 = {
	fontSize: "16px",
	[theme.breakpoints.down("md")]: {
		fontSize: "12px",
	},
};

theme.typography.subtitle2 = {
	fontSize: "14px",
	[theme.breakpoints.down("md")]: {
		fontSize: "12px",
	},
};
