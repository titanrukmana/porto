import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomImage from "../atoms/image";
import { contents } from "../constants/porto";
import styles from "./slide.module.css";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function Slide() {
	const [idx, setIdx] = useState(0);

	const handleNext = () =>
		setIdx((prev: number) => {
			if (prev != contents.length - 1) {
				return prev + 1;
			} else {
				return 0;
			}
		});
	const handlePrev = () =>
		setIdx((prev: number) => {
			if (prev == 0) {
				return contents.length - 1;
			} else {
				return prev - 1;
			}
		});

	return (
		<Container maxWidth="lg" sx={{ minHeight: "70vh" }} disableGutters>
			<Grid container justifyContent="flex-end">
				<Grid item>
					<IconButton onClick={handlePrev} className={styles.navButton} disableRipple>
						<Typography>❮</Typography>
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton onClick={handleNext} className={styles.navButton} disableRipple>
						<Typography>❯</Typography>
					</IconButton>
				</Grid>
			</Grid>
			<Grid container justifyContent="center">
				{contents.map((item) => {
					return (
						<Grid
							key={item.title}
							sx={{ padding: 0 }}
							className={item.idx == idx ? `${styles["select"]}` : `${styles["slide"]}`}
						>
							<Grid item xs={12} style={{ color: "#fff" }}>
								<Typography variant="h5">{item.title}</Typography>
								<Typography variant="subtitle2" style={{ fontWeight: 400, color: "#aaa" }} gutterBottom>
									{item.date}
								</Typography>
							</Grid>
							<Grid item container xs={12}>
								{item.source ? (
									<Link target="_blank" rel="noopener noreferrer" href={item.source.web || item.source.github}>
										<CustomImage src={"/showcase/" + item.gallery} alt={item.gallery} priority={false} />
									</Link>
								) : (
									<CustomImage src={"/showcase/" + item.gallery} alt={item.gallery} priority={false} />
								)}
							</Grid>
							<ul
								style={{
									listStylePosition: "inside",
									padding: 0,
									columns: 2,
									MozColumns: 2,
									WebkitColumns: 2,
									color: "#aaa",
								}}
							>
								{item.jobs.map((jobs, idx) => {
									return (
										<li key={idx}>
											<Typography variant="body2" sx={{ display: "inline", color: "#fff" }}>
												{jobs}
											</Typography>
										</li>
									);
								})}
							</ul>
							<Grid container item justifyContent="center">
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
												fontSize: {
													md: "auto",
													xs: "10px",
												},
											}}
										/>
									);
								})}
							</Grid>
							<Grid item xs={12} sx={{ mt: 2, textAlign: "center" }}>
								{item.source?.web ? (
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
										href={item.source.web}
									>
										<Typography
											sx={{
												fontWeight: 400,
												fontFamily: "Fira Code",
												minWidth: "1px",
												display: "inline",
											}}
										>
											{item.source.web.split("/")[2]} →
										</Typography>
									</Link>
								) : null}
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
										access is unavailable at the moment.
									</Typography>
								)}
							</Grid>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}
