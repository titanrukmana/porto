import { Container, Grid, Typography, ButtonBase } from "@mui/material";
import { Element } from "react-scroll";
import { GetInTouch } from "../atoms/button";
import Image from "next/image";
import styles from "../css.module.css";
import Socmed from "../atoms/socmed";

export default function Intro() {
	return (
		<Element name="about">
			<Container>
				<Grid container justifyContent="space-between" sx={{ minHeight: { md: "70vh", xs: "50vh" } }}>
					<Grid item xs={12} sx={{ marginBottom: "30px" }}>
						<Grid container alignItems="center">
							<Grid item xs={1} sx={{ marginRight: "5px" }}>
								<div style={{ height: "1px", borderTop: "1px solid #F2F4F3" }} />
							</Grid>
							<Grid item>
								<Typography variant="body2" className={styles.noselect} style={{ letterSpacing: "3px" }}>
									HELLO, I AM
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h1" className={styles.noselect} sx={{ fontWeight: 500 }}>
									<span style={{ fontWeight: 800 }}>TITAN</span> RUKMANA
								</Typography>
							</Grid>
						</Grid>
						<Grid container sx={{ marginBottom: 4 }}>
							<Grid item xs={12}>
								<Typography
									variant="h6"
									className={styles.noselect}
									sx={{ fontWeight: 500, display: { xs: "inline", md: "block" } }}
								>
									Full stack software developer currently based in Indonesia.
								</Typography>{" "}
								<Typography
									variant="h6"
									className={styles.noselect}
									sx={{ fontWeight: 500, display: { xs: "inline", md: "block" } }}
								>
									I find, combine, and align <span className={styles.underline}>any digital experience</span> you can
									think of.
								</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={5}>
							<Grid item xs={12} md="auto" sx={{ textAlign: { xs: "center", md: "left" } }}>
								<GetInTouch href="mailto: titan170300@gmail.com?subject=Business Inquiry">
									Let&apos;s get in touch
								</GetInTouch>
							</Grid>
							<Grid
								container
								item
								xs={12}
								md="auto"
								spacing={3}
								sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
							>
								<Socmed />
							</Grid>
						</Grid>
					</Grid>
					<Grid item sx={{ marginTop: "auto" }} xs={12} md={4}>
						<Grid container sx={{ justifyContent: { md: "flex-start", xs: "center" } }} alignItems="center" spacing={1}>
							<Grid item>
								<Image className={styles.arrow} src="/arrow_bottom.png" height={20} width={20} alt="" />
							</Grid>
							<Grid item>
								<Typography
									variant="subtitle1"
									sx={{ fontWeight: 500, fontFamily: "Source Code Pro" }}
									className={styles.noselect}
								>
									Scroll to explore
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
