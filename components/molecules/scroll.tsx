import { Grid, Typography, Chip } from "@mui/material";
import React from "react";
import CustomImage from "../atoms/image";
import { contents } from "../constants/porto";
import Link from "@mui/material/Link";
import styles from "../css.module.css";

export default function ScrollShowCase() {
	return (
		<>
			{contents.map((item, idx) => {
				return (
					<Grid
						container
						sx={{ color: "#fff", pb: idx == contents.length - 1 ? 0 : 10 }}
						key={item.idx}
						alignItems="flex-start"
						direction={(idx + 1) % 2 != 0 ? "row" : "row-reverse"}
						spacing={3}
					>
						<Grid
							item
							xs={6}
							sx={{
								position: "sticky",
								top: "90px",
							}}
						>
							<Typography variant="body1" sx={{ fontFamily: "Fira Code", fontWeight: 400, color: "#aaa" }}>
								{item.date}
							</Typography>
							<Typography variant="h4" sx={{ fontWeight: 500 }} gutterBottom>
								{item.title}
							</Typography>
							<ul
								style={{
									padding: 0,
									color: "#aaa",
								}}
							>
								{item.jobs.map((jobs, idx) => {
									return (
										<li key={idx} style={{ marginLeft: "1.1em" }}>
											<Typography variant="body2" sx={{ display: "inline", color: "#fff" }}>
												{jobs}
											</Typography>
										</li>
									);
								})}
							</ul>
							{item.tech.map((tech, idx) => {
								return (
									<Chip
										key={idx}
										label={tech}
										variant="outlined"
										sx={{
											backgroundColor: "#fff",
											borderRadius: 0,
											color: "#000",
											fontFamily: "Fira Code",
											fontWeight: 500,
											mr: 1,
											mt: 1,
										}}
									/>
								);
							})}
							<Grid item xs={12} sx={{ mt: 2 }}>
								{item.source?.github ? (
									<Link
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											color: "#fff",
											textDecoration: "none",
											textTransform: "none",
											"&:hover": {
												color: "#e4ff1a",
											},
										}}
										href={item.source.github}
									>
										<Typography
											sx={{
												fontWeight: 400,
												fontFamily: "Fira Code",
												display: "inline",
											}}
										>
											{item.source.github.split("/")[2].split(".")[0]} repository →
										</Typography>
									</Link>
								) : null}
								{item.source ? null : (
									<Typography
										sx={{
											color: "#fff",
											mt: 2,
											fontFamily: "Fira Code",
										}}
									>
										access is unavailable at the moment
									</Typography>
								)}
							</Grid>
						</Grid>
						<Grid item container xs={6} sx={{ position: "sticky", top: "90px", height: "fit-content" }}>
							{item.source ? (
								<Link target="_blank" rel="noopener noreferrer" href={item.source.github}>
									<CustomImage src={"/showcase/" + item.gallery} alt={item.gallery} priority={false} />
								</Link>
							) : (
								<CustomImage src={"/showcase/" + item.gallery} alt={item.gallery} priority={false} />
							)}
						</Grid>
					</Grid>
				);
			})}
		</>
	);
}
