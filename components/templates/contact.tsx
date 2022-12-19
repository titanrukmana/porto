import { Container, Grid, Typography } from "@mui/material";
import { Element } from "react-scroll";
import { GetInTouch } from "../atoms/button";
import Socmed from "../atoms/socmed";
import { MdSailing } from "react-icons/md";

export default function Contact() {
	return (
		<Element name="contact">
			<Container
				sx={{
					py: { md: 5, xs: 3 },
					color: "#fff",
					borderTop: 1,
					borderBottom: 1,
				}}
				maxWidth="xl"
			>
				<Grid container alignItems="center" justifyContent="center">
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Typography variant="h2" sx={{ color: "#fff", fontWeight: 400 }}>
							let&apos;s collaborate.
						</Typography>
						<Typography variant="h6" sx={{ color: "#aaa", fontWeight: 400, mb: 3 }} gutterBottom>
							I&apos;m ready to ship
						</Typography>
						<GetInTouch href="mailto: titan170300@gmail.com">
							<Typography sx={{ fontFamily: "Fira Code" }}>
								<MdSailing />
							</Typography>
						</GetInTouch>
					</Grid>
					<Grid
						container
						item
						xs="auto"
						spacing={3}
						sx={{ justifyContent: "center", fontSize: { md: "25px", xs: "20px" }, mt: 1 }}
					>
						<Socmed />
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
