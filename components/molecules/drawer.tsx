import { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import styles from "../css.module.css";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { Container } from "@mui/system";
import Image from "next/image";
import { DrawerButton } from "../atoms/button";
import CloseIcon from "@mui/icons-material/Close";
import Hamburger from "../atoms/hamburger";
import drawerContext from "../../context/drawerContext";
import Socmed from "../atoms/socmed";

export default function TopDrawer() {
	const { visible, setVisible } = useContext(drawerContext);
	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setVisible(open);
	};

	const section = [
		{ key: 0, point: "about" },
		{ key: 1, point: "works" },
		{ key: 2, point: "tools" },
	];

	const list = () => (
		<Box
			sx={{
				color: "#fff",
				backgroundColor: "#000",
				height: "100vh",
			}}
			role="presentation"
			onKeyDown={toggleDrawer(false)}
		>
			<Container maxWidth="xl">
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{ minHeight: { xs: "80vh", md: "100vh" }, px: { xs: 3, md: 5 } }}
					className={visible ? styles.visible : styles.hidden}
				>
					<Grid item sx={{ textAlign: "center" }}>
						<List>
							{section.map((item) => {
								return (
									<Box key={item.key}>
										<Link
											to={item.point}
											offset={-100}
											spy={true}
											smooth={true}
											delay={100}
											style={{ cursor: "pointer" }}
										>
											<DrawerButton disableRipple className={styles.drawerButton} onClick={toggleDrawer(false)}>
												<Typography variant="h3" className={styles.drawerText}>
													{item.point}
												</Typography>
											</DrawerButton>
										</Link>
									</Box>
								);
							})}
						</List>
					</Grid>
					<Grid item container justifyContent="center" alignItems="center" direction="row" spacing={4}>
						<Socmed />
					</Grid>
					<Grid item sx={{ marginTop: "35px" }}>
						<Typography variant="subtitle2" sx={{ color: "#fff", fontFamily: "Fira Code", fontWeight: 400 }}>
							titan170300@gmail.com
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);

	return (
		<Grid style={{ float: "right" }}>
			<Button
				onClick={toggleDrawer(!visible)}
				disableRipple={true}
				className={styles.openbutton}
				sx={{
					"&:hover": {
						backgroundColor: "inherit",
					},
				}}
			>
				<Hamburger />
			</Button>
			<Drawer anchor="top" open={visible} onClose={toggleDrawer(false)} transitionDuration={{ enter: 700, exit: 700 }}>
				{list()}
			</Drawer>
		</Grid>
	);
}
