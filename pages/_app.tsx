import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { EmotionCache } from "@emotion/react";
import type { NextPage } from "next";
import type { ReactNode } from "react";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import drawerContext from "../context/drawerContext";
import createEmotionCache from "../styles/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

type Page<P = unknown> = NextPage<P> & {
	getLayout?: (_page: ReactNode) => ReactNode;
};
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	Component: Page;
}

export default function App(props: MyAppProps) {
	const [visible, setVisible] = useState(false);
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles);
		}
	}, []);
	return (
		<CacheProvider value={emotionCache}>
			<drawerContext.Provider value={{ visible, setVisible }}>
				<Component {...pageProps} />
			</drawerContext.Provider>
		</CacheProvider>
	);
}
