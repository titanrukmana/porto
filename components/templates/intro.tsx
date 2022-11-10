import { Container, Grid, Typography, ButtonBase } from "@mui/material";
import { Element } from "react-scroll";
import { GetInTouch } from "../atoms/button";
import Image from "next/image";
import styles from "../css.module.css";

export default function Intro() {
	const socmed = [
		{ key: 0, name: "instagram", url: "https://instagram.com/titanrmn" },
		{ key: 1, name: "linkedin", url: "https://linkedin.com/in/titan-rukmana" },
		{ key: 2, name: "github", url: "https://github.com/titanrukmana" },
	];
	return (
		<Element name="introduction">
			<Container>
				<Grid container justifyContent="space-between" sx={{ height: "70vh" }}>
					<Grid item>
						<Grid container alignItems="center">
							<Grid item xs={1} sx={{ marginRight: "5px" }}>
								<div style={{ height: "1px", borderTop: "2px solid #F2F4F3" }} />
							</Grid>
							<Grid item>
								<Typography variant="body2">HELLO, I AM</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h1">
									<b>
										<span style={{ fontWeight: 800 }}>Titan</span> Rukmana
									</b>
								</Typography>
							</Grid>
						</Grid>
						<Grid container sx={{ marginBottom: 4 }}>
							<Grid item xs={12}>
								<Typography variant="h6">Full stack software developer currently based in Indonesia.</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6">
									I find, combine, and align <span className={styles.underline}>any digital experience</span> you can
									think of.
								</Typography>
							</Grid>
						</Grid>
						<Grid container alignItems="center" spacing={5}>
							<Grid item xs={12} lg={2} sx={{ textAlign: { xs: "center", lg: "left" } }}>
								<GetInTouch href="mailto: titan170300@gmail.com?subject=Business Inquiry">
									Let&apos;s get in touch
								</GetInTouch>
							</Grid>
							<Grid container item lg={10} spacing={3} sx={{ justifyContent: { xs: "center", lg: "flex-start" } }}>
								{socmed.map((item) => {
									return (
										<Grid item key={item.key} sx={{ alignItems: { xs: "center", lg: "left" } }}>
											<ButtonBase disableRipple href={item.url}>
												<Image src={`/${item.name}.png`} height={15} width={15} alt="" />
											</ButtonBase>
										</Grid>
									);
								})}
							</Grid>
						</Grid>
					</Grid>
					<Grid item sx={{ marginTop: "auto" }}>
						<Grid container alignItems="center" justifyContent="flex-end" spacing={3}>
							<Grid item>
								<Image className={styles.arrow} src="/arrow_bottom.png" height={20} width={20} alt="" />
							</Grid>
							<Grid item>
								<Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
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
