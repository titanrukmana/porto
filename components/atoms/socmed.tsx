import { Grid, ButtonBase } from "@mui/material";
import styles from "../css.module.css";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
export default function Socmed() {
	const socmed = [
		{
			key: 0,
			name: "instagram",
			url: "https://instagram.com/titanrmn",
			component: <FaInstagram className={styles.socmed} />,
		},
		{
			key: 1,
			name: "linkedin",
			url: "https://linkedin.com/in/titan-rukmana",
			component: <FaLinkedinIn className={styles.socmed} />,
		},
		{
			key: 2,
			name: "github",
			url: "https://github.com/titanrukmana",
			component: <FaGithub className={styles.socmed} />,
		},
	];
	return (
		<>
			{socmed.map((item) => {
				return (
					<Grid item key={item.key} sx={{ alignItems: { xs: "center", lg: "left" } }}>
						<ButtonBase disableRipple href={item.url}>
							{item.component}
						</ButtonBase>
					</Grid>
				);
			})}
		</>
	);
}
