import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { EmotionCache } from "@emotion/react";
import type { NextPage } from "next";
import type { ReactNode } from "react";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import drawerContext from "../context/drawerContext";
import createEmotionCache from "../styles/createEmotionCache";
import Head from "next/head";

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
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:url" content="https://titanrukmana.my.id" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Titan Rukmana's Brief Portfolio" />
				<meta property="og:description" content="Titan Rukmana's brief portfolio" />
				<meta property="og:image" content="https://titanrukmana.my.id/_next/image?url=%2Fthumbnail.png&w=1920&q=75" />
				<link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="icon/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png" />
				<link rel="manifest" href="icon/site.webmanifest" />
				<link rel="mask-icon" href="icon/safari-pinned-tab.svg" color="#000000" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<CacheProvider value={emotionCache}>
				<drawerContext.Provider value={{ visible, setVisible }}>
					<Component {...pageProps} />
				</drawerContext.Provider>
			</CacheProvider>
		</>
	);
}
