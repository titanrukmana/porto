import AppBar from "@mui/material/AppBar";
import { Container, Grid, Button, Toolbar } from "@mui/material";
import TopDrawer from "./drawer";
import Image from "next/image";

export default function Header() {
	return (
		<AppBar position="static" style={{ backgroundColor: "#020100" }}>
			<Container maxWidth="lg" sx={{ py: 3 }}>
				<Toolbar disableGutters>
					<Grid container alignItems="center" justifyContent="space-between">
						<Grid item xs={4} md={6}>
							<Image src="/logo-white.png" width={60} height={40} alt="logo" />
						</Grid>
						<Grid item xs={2} md={6}>
							<TopDrawer />
						</Grid>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
