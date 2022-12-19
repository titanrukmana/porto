import { Button, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GetInTouch = styled(Button)({
	borderRadius: 0,
	border: "1px solid #fff",
	textTransform: "none",
	textDecoration: "none",
	fontFamily: ["'Fira Code'", "monospace"].join(","),
	fontWeight: "Bold",
	backgroundColor: "#000",
	color: "#fff",
	paddingTop: 10,
	paddingBottom: 10,
	paddingLeft: 20,
	paddingRight: 20,
	boxShadow: "5px 5px #fff",
	"&:hover": {
		boxShadow: "none",
		color: "#000",
		backgroundColor: "#fff",
	},
});

export const DrawerButton = styled(ButtonBase)({
	padding: 20,
	"&:hover": {
		backgroundColor: "#000",
	},
});
