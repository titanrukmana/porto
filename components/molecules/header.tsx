import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Grid, Button, Toolbar, Typography } from "@mui/material";
import TopDrawer from "./drawer";
import CustomImage from "../atoms/image";
import drawerContext from "../../context/drawerContext";
import styles from "../css.module.css";

export default function Header() {
	const { visible } = useContext(drawerContext);

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: visible ? "transparent" : "#000",
				zIndex: 10000,
				transition: "all 0.5s ease-in-out",
				MozTransition: "all 0.5s ease-in-out",
				WebkitTransition: "all 0.5s ease-in-out",
				msTransition: "all 0.5s ease-in-out",
				OTransition: "all 0.5s ease-in-out",
			}}
			elevation={0}
		>
			<Toolbar disableGutters>
				<Container maxWidth="xl" sx={{ py: 3 }}>
					<Grid container alignItems="center" justifyContent="space-between">
						<Grid item xs={2} md={4}>
							<CustomImage src={"/logo.svg"} alt={"logo"} width="40px" priority={false} />
						</Grid>
						<Grid item>
							<TopDrawer />
						</Grid>
					</Grid>
				</Container>
			</Toolbar>
		</AppBar>
	);
}
