import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Grid, Button, Toolbar, Typography } from "@mui/material";
import TopDrawer from "./drawer";
import Image from "next/image";
import drawerContext from "../../context/drawerContext";
import styles from "../css.module.css";

export default function Header() {
	const { visible } = useContext(drawerContext);

	return (
		<AppBar position="sticky" style={{ backgroundColor: "#020100", zIndex: 10000 }} elevation={0}>
			<Toolbar disableGutters>
				<Container maxWidth="lg" sx={{ py: 1 }}>
					<Grid container alignItems="center" justifyContent="space-between">
						<Grid item xs={2} md={4}>
							<Image src="/logo-white.png" width={60} height={40} alt="logo" />
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
