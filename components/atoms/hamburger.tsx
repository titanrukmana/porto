import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import styles from "../css.module.css";
import drawerContext from "../../context/drawerContext";

export default function Hamburger() {
	const { visible, setVisible } = useContext(drawerContext);
	useEffect(() => {
		console.log(visible);
	}, [visible]);
	return (
		<Box>
			<div
				className={visible ? `${styles.menubtn} ${styles.menubtnopen}` : `${styles.menubtn}`}
				onClick={() => {
					setVisible(!visible);
				}}
			>
				<div className={styles.hamburger}></div>
				<div className={styles.hamburger2}></div>
			</div>
		</Box>
	);
}
