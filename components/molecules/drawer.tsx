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

export default function TopDrawer() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setOpen(open);
	};

	const section = [
		{ key: 0, point: "introduction" },
		{ key: 1, point: "skills" },
	];

	const list = () => (
		<Box
			sx={{
				width: "100vw",
				height: "100vh",
				color: "#F2F4F3",
				backgroundColor: "#020100",
				py: { xs: 5, md: 10 },
			}}
			role="presentation"
			onKeyDown={toggleDrawer(false)}
		>
			<Container maxWidth="lg">
				<Grid container alignItems="center" justifyContent="center" sx={{ backgroundColor: "#020100" }}>
					<Grid item sx={{ marginLeft: "auto" }}>
						<Typography sx={{ cursor: "pointer" }} variant="h3" onClick={toggleDrawer(false)}>
							X
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<List>
							{section.map((item) => {
								return (
									<div key={item.key}>
										<Link
											to={item.point}
											offset={-30}
											spy={true}
											smooth={true}
											delay={100}
											style={{ cursor: "pointer" }}
										>
											<DrawerButton disableRipple className={styles.drawerButton}>
												<Typography variant="h3" onClick={toggleDrawer(false)}>
													{item.point.toUpperCase()}
												</Typography>
											</DrawerButton>
										</Link>
									</div>
								);
							})}
						</List>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);

	return (
		<div>
			<div style={{ float: "right" }}>
				<Button onClick={toggleDrawer(true)} disableRipple>
					<Image src="/hamburger.png" width={52} height={29} alt="hamburger" />
				</Button>
				<Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
					{list()}
				</Drawer>
			</div>
		</div>
	);
}
