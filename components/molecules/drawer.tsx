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
		{ key: 1, point: "services" },
	];

	const list = () => (
		<Box
			sx={{
				color: "#F2F4F3",
				backgroundColor: "#020100",
				height: "100vh",
			}}
			role="presentation"
			onKeyDown={toggleDrawer(false)}
		>
			<Container maxWidth="lg">
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{ height: { xs: "80vh", md: "100vh" }, px: { xs: 3, md: 5 } }}
				>
					<Grid item sx={{ textAlign: "center" }}>
						<List>
							{section.map((item) => {
								return (
									<Box key={item.key} style={{ marginTop: item.key == 0 ? 0 : 15, marginBottom: 15 }}>
										<Link
											to={item.point}
											offset={-30}
											spy={true}
											smooth={true}
											delay={100}
											style={{ cursor: "pointer" }}
										>
											<DrawerButton disableRipple className={styles.drawerButton}>
												<Typography variant="h3" onClick={toggleDrawer(false)} className={styles.drawerText}>
													&lt;{item.point} /&gt;
												</Typography>
											</DrawerButton>
										</Link>
									</Box>
								);
							})}
						</List>
					</Grid>
					<Grid item container justifyContent="center" alignItems="center" spacing={10}>
						<Socmed />
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
				sx={{
					"&:hover": {
						backgroundColor: "inherit",
					},
				}}
			>
				<Hamburger />
			</Button>
			<Drawer anchor="top" open={visible} onClose={toggleDrawer(false)} transitionDuration={{ enter: 500, exit: 1000 }}>
				{list()}
			</Drawer>
		</Grid>
	);
}
