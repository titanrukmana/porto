import { Container, Grid, Divider, Typography, Button, ButtonBase } from "@mui/material";
import { Element } from "react-scroll";
import { GetInTouch } from "../atoms/button";
import Image from "next/image";
import Marquee from "react-easy-marquee";
import CustomImage from "../atoms/image";

export default function Page1() {
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
	];
	return (
		<Element name="skills">
			<Grid container justifyContent="flex-start" spacing={5}>
				<Grid item xs={12} sx={{ textAlign: "center" }}>
					<Typography variant="h5" style={{ fontWeight: "500" }}>
						Tech Stack
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Marquee background="#E4FF1A" duration={40000}>
						{stack.map((item) => {
							return (
								<Grid item container key={item.key} sx={{ alignItems: "center", marginRight: "10px" }}>
									<CustomImage src={`/marquee/${item.name}.png`} width="px" alt={item.name} priority={true} />
								</Grid>
							);
						})}
					</Marquee>
				</Grid>
			</Grid>
		</Element>
	);
}
