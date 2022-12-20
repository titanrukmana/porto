import { Container, Grid, Typography } from "@mui/material";
import { Element } from "react-scroll";

export default function Footer() {
	return (
		<Element name="footer">
			<Container sx={{ pt: { md: 20, xs: 15 }, pb: { md: 10, xs: 5 } }} maxWidth="xl">
				<Grid container alignItems="center" justifyContent="center">
					<Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
						<Typography sx={{ fontFamily: "Fira Code", display: "inline", color: "#aaa" }} gutterBottom>
							© 2022 Titan Rukmana
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
