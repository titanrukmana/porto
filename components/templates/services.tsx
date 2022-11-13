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
			tags: ["Docker", "Kubernetes", "CI/CD", "Auto Scale", "Cloud Host"],
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
		<Container sx={{ py: { md: "30px", xs: "15px" } }}>
			<Grid container spacing={2} justifyContent="space-between" alignItems="center" direction="row">
				<Grid item xs={12}>
					<Typography
						variant="h5"
						gutterBottom
						sx={{ textAlign: "center", fontFamily: "Source Code Pro", fontWeight: 500 }}
					>
						&lt;Services&gt;
					</Typography>
					<Typography variant="body2" sx={{ textAlign: "center", fontFamily: "Source Code Pro", fontWeight: 400 }}>
						What I can offer at the moment, although I am eager to learn something new.
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
										backgroundColor: "#e4ff1a",
										color: "#020100",
									}}
									elevation={0}
								>
									<CardMedia sx={{ px: 2, pt: 2 }}>
										<CustomImage width="20px" priority={false} src={item.icon} alt={item.icon} />
									</CardMedia>
									<CardContent>
										<Typography variant="h5" gutterBottom sx={{ fontFamily: "Source Code Pro" }}>
											{item.title}
										</Typography>
										{item.tags.map((tag) => {
											return (
												<Chip
													key={"test"}
													label={tag}
													variant="outlined"
													sx={{
														backgroundColor: "#020100",
														borderRadius: 0,
														border: "1px solid #020100",
														color: "#e4ff1a",
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
