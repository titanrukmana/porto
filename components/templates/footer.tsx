import { Container, Grid, Typography } from "@mui/material";
import { Element } from "react-scroll";
import CustomImage from "../atoms/image";

export default function Footer() {
	return (
		<Element name="footer">
			<Container sx={{ pt: { md: 20, xs: 15 }, pb: 5 }} maxWidth="xl">
				<Grid container alignItems="center" justifyContent="center">
					<Grid item sx={{ textAlign: "center", mt: 3 }}>
						<CustomImage src={"/logo.svg"} alt={"logo"} width="40px" priority={false} />
					</Grid>
					<Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
						<Typography sx={{ fontFamily: "Fira Code", color: "#aaa" }} gutterBottom>
							© 2023
						</Typography>
						<Typography sx={{ fontFamily: "Fira Code", color: "#aaa" }} gutterBottom>
							Bandung, West Java, Indonesia
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
