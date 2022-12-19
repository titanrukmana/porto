import { useContext } from "react";
import styles from "../css.module.css";
import drawerContext from "../../context/drawerContext";

export default function Hamburger() {
	const { visible, setVisible } = useContext(drawerContext);
	return (
		<div
			className={visible ? `${styles.menubtn} ${styles.menubtnopen}` : `${styles.menubtn}`}
			onClick={() => {
				setVisible(!visible);
			}}
		>
			<div className={styles.hamburger}></div>
			<div className={styles.hamburger2}></div>
		</div>
	);
}
