import { Grid, ButtonBase } from "@mui/material";
import CustomImage from "./image";

export default function Socmed() {
	const socmed = [
		{ key: 0, name: "instagram", url: "https://instagram.com/titanrmn" },
		{ key: 1, name: "linkedin", url: "https://linkedin.com/in/titan-rukmana" },
		{ key: 2, name: "github", url: "https://github.com/titanrukmana" },
	];
	return (
		<>
			{socmed.map((item) => {
				return (
					<Grid item key={item.key} sx={{ alignItems: { xs: "center", lg: "left" } }}>
						<ButtonBase disableRipple href={item.url}>
							<CustomImage src={`/${item.name}.png`} width="15px" alt={`${item.name}`} priority={true} />
						</ButtonBase>
					</Grid>
				);
			})}
		</>
	);
}
