import { Button, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GetInTouch = styled(Button)({
	borderRadius: 0,
	border: "1px solid #F2F4F3",
	textTransform: "none",
	textDecoration: "none",
	fontFamily: ["'Karla'", "sans-serif"].join(","),
	fontWeight: "Bold",
	backgroundColor: "#020100",
	color: "#F2F4F3",
	paddingTop: 10,
	paddingBottom: 10,
	paddingLeft: 20,
	paddingRight: 20,
	boxShadow: "5px 5px #F2F4F3",
	"&:hover": {
		boxShadow: "none",
		color: "#020100",
		backgroundColor: "#F2F4F3",
	},
});

export const DrawerButton = styled(ButtonBase)({
	padding: 20,
	"&:hover": {
		backgroundColor: "#333333",
	},
});
