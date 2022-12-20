import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
export default function Top() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]);

	return (
		<Box
			sx={{
				position: "fixed",
				zIndex: 1000,
				right: "25px",
				bottom: "30px",
				opacity: scrollPosition < 400 ? 0 : 1,
				display: scrollPosition < 400 ? "none" : "block",
			}}
		>
			<Link
				to="intro"
				offset={-1000}
				spy={true}
				smooth={true}
				delay={100}
				style={{
					color: "#fff",
					textAlign: "center",
					overflow: "hidden",
					cursor: "pointer",
				}}
				disabled={true}
			>
				<MdOutlineKeyboardArrowUp size="50px" />
			</Link>
		</Box>
	);
}
