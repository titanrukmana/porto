import { useState, useEffect, useCallback } from "react";
import { Container, Grid, Typography, ButtonBase } from "@mui/material";
import { Element } from "react-scroll";
import { GetInTouch } from "../atoms/button";
import Image from "next/image";
import styles from "../css.module.css";
import Socmed from "../atoms/socmed";
import { FaArrowDown } from "react-icons/fa";

export default function Intro() {
	const [text, setText] = useState("");
	const [i, setI] = useState(1);
	const shuffle = useCallback(() => {
		const content = ["actuate", "integrate", "elevate"];
		setText(content[i - 1]);
		setI((prev) => (prev > content.length - 1 ? 1 : prev + 1));
	}, [i]);

	useEffect(() => {
		const intervalID = setInterval(shuffle, 500);
		return () => clearInterval(intervalID);
	}, [shuffle]);

	return (
		<Element name="intro">
			<Container maxWidth="xl">
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					sx={{ textAlign: "left", marginTop: { xs: "100px", md: "150px" } }}
				>
					<Grid item xs={12} sx={{ marginBottom: "30px" }}>
						<Grid container alignItems="center" justifyContent="center">
							<Grid item xs={12}>
								<Typography variant="h5" sx={{ fontFamily: "Fira Code", color: "#aaa", fontWeight: 500 }}>
									Hello, I am
								</Typography>
								<Typography
									variant="h2"
									className={styles.noselect}
									sx={{ fontWeight: 600, fontSize: { md: "60px", xs: "40px" } }}
								>
									Titan Rukmana. <br />I {text} digital experiences.
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							alignItems="center"
							spacing={5}
							justifyContent="flex-start"
							sx={{ mt: { md: "25px", xs: "0px" } }}
						>
							<Grid item xs="auto" sx={{ textAlign: "left" }}>
								<GetInTouch href="mailto: titan170300@gmail.com?subject=Business Inquiry" disableRipple>
									let&apos;s get in touch
								</GetInTouch>
							</Grid>
							<Grid
								container
								item
								xs="auto"
								spacing={3}
								sx={{ justifyContent: "center", fontSize: { md: "25px", xs: "20px" } }}
							>
								<Socmed />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
