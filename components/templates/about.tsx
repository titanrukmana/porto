import { Container, Grid, Typography } from "@mui/material";
import { Element } from "react-scroll";

export default function About() {
	return (
		<Element name="about">
			<Container sx={{ pt: { md: 5, xs: 3 }, color: "#fff" }} maxWidth="xl">
				<Grid container justifyContent="flex-start" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="h2" sx={{ fontWeight: 500 }}>
							About
						</Typography>
					</Grid>
					<Grid item xs={12} md={7}>
						<Typography variant="h6" sx={{ color: "#aaa", fontWeight: 400, textAlign: "justify" }}>
							I&apos;m Titan, an Electrical Engineering student @{" "}
							<span style={{ color: "#fff" }}>Institut Teknologi Bandung</span>. I would best describe myself as a
							jack-of-all-trades. I enjoy learning and tinkering about new technologies, from robots to softwares.
							Discuss and convert rough ideas into figurative &#40;or literal?&#41; diamonds.
							<br />
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
