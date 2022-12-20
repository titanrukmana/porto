import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { Element } from "react-scroll";
import CustomImage from "../atoms/image";
import styles from "../css.module.css";
import ScrollShowCase from "../molecules/scroll";
import Slide from "../molecules/slide";

export default function Porto() {
	return (
		<Element name="works" style={{ backgroundColor: "#000" }}>
			<Container sx={{ py: { md: 5, xs: 3 }, color: "#fff" }} maxWidth="xl">
				<Grid container alignItems="center" direction="row">
					<Grid item xs={12}>
						<Typography variant="h2" sx={{ fontWeight: 500 }}>
							Featured Works
						</Typography>
					</Grid>
					<Grid item sx={{ display: { xs: "none", md: "block" } }} xs={12}>
						<ScrollShowCase />
					</Grid>
					<Grid item sx={{ display: { xs: "block", md: "none" }, padding: 0 }} xs={12}>
						<Slide />
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
