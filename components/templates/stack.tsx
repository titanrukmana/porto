import { Container, Grid, Divider, Typography, Button, ButtonBase } from "@mui/material";
import { Element } from "react-scroll";
import { GetInTouch } from "../atoms/button";
import Image from "next/image";
import Marquee from "react-easy-marquee";
import CustomImage from "../atoms/image";

export default function Stack() {
	const stack = [
		{ key: 0, name: "javascript" },
		{ key: 1, name: "typescript" },
		{ key: 2, name: "react" },
		{ key: 3, name: "next" },
		{ key: 4, name: "vue" },
		{ key: 5, name: "node" },
		{ key: 6, name: "php" },
		{ key: 7, name: "laravel" },
		{ key: 8, name: "python" },
		{ key: 9, name: "django" },
		{ key: 10, name: "go" },
		{ key: 11, name: "mongodb" },
		{ key: 12, name: "mysql" },
		{ key: 13, name: "postgresql" },
		{ key: 14, name: "redis" },
		{ key: 15, name: "influxdb" },
		{ key: 16, name: "docker" },
		{ key: 17, name: "graphql" },
	];
	return (
		<Element name="services">
			<Grid container justifyContent="flex-start" spacing={5}>
				<Grid item xs={12} sx={{ textAlign: "center" }}>
					<Typography variant="h5">Tech Stack</Typography>
				</Grid>
				<Grid item xs={12}>
					<Marquee background="#E4FF1A" duration={40000}>
						{stack.map((item) => {
							return (
								<Grid item container key={item.key} sx={{ alignItems: "center", mx: "5px" }}>
									<CustomImage
										src={`/marquee/${item.name}.png`}
										width="32px"
										alt={item.name}
										priority={true}
										title={item.name}
									/>
								</Grid>
							);
						})}
					</Marquee>
				</Grid>
			</Grid>
		</Element>
	);
}
