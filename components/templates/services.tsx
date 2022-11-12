import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from "@mui/material";
import CustomImage from "../atoms/image";
import styles from "../css.module.css";

export default function Services() {
	const services = [
		{
			key: 0,
			title: "Software Dev",
			tags: ["Frontend", "Backend", "Full Stack", "SPA", "MPA", "PWA"],
			icon: "/software.png",
		},
		{
			key: 1,
			title: "API Solutions",
			tags: ["REST", "SOAP", "RPC", "WebSocket", "SSE", "GraphQL"],
			icon: "/api.png",
		},
		{
			key: 2,
			title: "Cloud & DevOps",
			tags: ["Docker", "Jenkins", "Kubernetes", "Auto Scale", "Cloud Host"],
			icon: "/cicd.png",
		},
		{
			key: 3,
			title: "Internet of Things",
			tags: ["Edge Computing", "Arduino", "Raspberry Pi", "FPGA", "ASIC"],
			icon: "/iot.png",
		},
	];
	return (
		<Container sx={{ height: "100vh", marginTop: { md: "30px", xs: "15px" } }}>
			<Grid container spacing={2} justifyContent="space-between" alignItems="center" direction="row">
				<Grid item xs={12}>
					<Typography
						variant="h5"
						gutterBottom
						sx={{ textAlign: "center", fontFamily: "Source Code Pro", fontWeight: 500 }}
					>
						&lt;Services&gt;
					</Typography>
				</Grid>
				<Grid item xs={0} md={2} />
				<Grid item container md={8} xs={12} spacing={1} direction="row">
					{services.map((item) => {
						return (
							<Grid item xs={12} md={6} key={item.key}>
								<Card
									sx={{
										border: "2px solid #e4ff1a",
										height: "100%",
										borderRadius: 0,
										backgroundColor: "#020100",
										color: "#e4ff1a",
									}}
									elevation={0}
								>
									<CardMedia sx={{ px: 2, pt: 2 }}>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												backgroundColor: "#e4ff1a",
												width: "30px",
												height: "30px",
											}}
										>
											<CustomImage
												width="20px"
												priority={false}
												src={item.icon}
												alt={item.icon}
												style={{ top: "15%" }}
											/>
										</div>
									</CardMedia>
									<CardContent>
										<Typography variant="h5" gutterBottom>
											{item.title}
										</Typography>
										{item.tags.map((tag) => {
											return (
												<Chip
													key={"test"}
													label={tag}
													variant="outlined"
													sx={{
														backgroundColor: "#e4ff1a",
														borderRadius: 0,
														border: "1px solid #e4ff1a",
														color: "#020100",
														fontFamily: "Source Code Pro",
														mr: 1,
														mt: 1,
													}}
												/>
											);
										})}
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
				<Grid item xs={0} md={2} />
				<Grid item xs={12}>
					<Typography
						variant="h5"
						gutterBottom
						sx={{ textAlign: "center", fontFamily: "Source Code Pro", fontWeight: 500 }}
					>
						&lt;/Services&gt;
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
