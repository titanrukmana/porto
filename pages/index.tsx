import Head from "next/head";
import { Grid, Container, ThemeProvider } from "@mui/material";
import Header from "../components/molecules/header";
import Page1 from "../components/molecules/page1";
import Page2 from "../components/molecules/page2";
import { theme } from "../styles/theme";

export default function Home() {
	return (
		<>
			<div>
				<Head>
					<title>Titan Rukmana</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="shortcut icon" href="/icon/favicon.ico" />
				</Head>
			</div>
			<ThemeProvider theme={theme}>
				<Header />
				<Page1 />
				<div style={{ marginBottom: 50 }} />
				<Page2 />
			</ThemeProvider>
		</>
	);
}
