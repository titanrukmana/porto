import { Container, Grid, Typography } from "@mui/material";
import { Element } from "react-scroll";
import CustomImage from "../atoms/image";
import styles from "../css.module.css";

export default function Footer() {
	return (
		<Element name="footer">
			<Container sx={{ pt: { md: 20, xs: 15 }, pb: { md: 10, xs: 5 }, color: "#fff" }} maxWidth="xl">
				<Grid container alignItems="center" justifyContent="center">
					<Grid item xs="auto" className={styles.rotate} sx={{ width: "40px", height: "40px" }}>
						<CustomImage src={"/logo.svg"} alt={"logo"} width="40px" priority={false} />
					</Grid>
					<Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
						<Typography sx={{ fontFamily: "Fira Code", display: "inline", color: "#fff" }} gutterBottom>
							© 2022 Titan Rukmana
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
