import Image from "next/image";
import React from "react";
import styles from "../css.module.css";

interface Props {
	src: string;
	alt: string;
	priority: boolean;
	width?: string;
	maxWidth?: string;
	title?: string;
	style?: any;
}

const CustomImage: React.FC<Props> = ({ src, width, maxWidth, alt, priority, title, style }) => {
	const widths: {
		width: string;
		maxWidth: string;
		height: string;
	} = {
		width: width ? width : "",
		maxWidth: maxWidth ? maxWidth : "",
		height: "auto",
	};

	return (
		<>
			<div className={styles.imageContainer} style={widths}>
				<Image
					style={style}
					priority={priority}
					className={styles.image}
					src={src ? src : ""}
					layout="fill"
					alt={alt}
					title={title ? title : ""}
				/>
			</div>
		</>
	);
};

export default CustomImage;
