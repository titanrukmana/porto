import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import { content } from "../constants/tools";

export default function Tools() {
	return (
		<Element name="tools">
			<Container sx={{ py: { md: 5, xs: 3 }, color: "#fff" }} maxWidth="xl">
				<Grid container justifyContent="flex-start" alignItems="center">
					<Grid item xs={12}>
						<Typography variant="h2" sx={{ fontWeight: 500 }}>
							Tools & Languages
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6" sx={{ color: "#aaa", fontWeight: 400, textAlign: "justify" }} gutterBottom>
							What I use to build and/or learn.
						</Typography>
					</Grid>
					<Grid item container justifyContent="space-between">
						{content.map((item, idx) => {
							const len = item.contents.length;
							return (
								<Grid item xs={12} lg={4} key={idx} sx={{ mt: { xs: idx == 0 ? 0 : 5, lg: 0 } }}>
									<Typography variant="h5" sx={{ fontWeight: 500 }}>
										{item.title}
									</Typography>
									<Typography variant="body1" sx={{ color: "#797979" }} gutterBottom>
										{item.desc}
									</Typography>
									<Grid container item direction="row">
										{item.contents.map((item, idx) => {
											return (
												<React.Fragment key={idx}>
													{idx < len / 3 && (
														<Grid item xs={6} sx={{ mt: 0.5 }}>
															<Typography variant="body2" sx={{ fontFamily: "Fira Code", display: "inline" }}>
																{item}
															</Typography>
														</Grid>
													)}
													{idx < len - len / 3 && idx >= len / 3 && (
														<Grid item xs={6} sx={{ mt: 0.5 }}>
															<Typography variant="body2" sx={{ fontFamily: "Fira Code", display: "inline" }}>
																{item}
															</Typography>
														</Grid>
													)}
													{idx >= len - len / 3 && (
														<Grid item xs={6} sx={{ mt: 0.5 }}>
															<Typography variant="body2" sx={{ fontFamily: "Fira Code", display: "inline" }}>
																{item}
															</Typography>
														</Grid>
													)}
												</React.Fragment>
											);
										})}
									</Grid>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}
