import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import drawerContext from "../context/drawerContext";

export default function App({ Component, pageProps }: AppProps) {
	const [visible, setVisible] = useState(false);

	return (
		<drawerContext.Provider value={{ visible, setVisible }}>
			<Component {...pageProps} />
		</drawerContext.Provider>
	);
}
