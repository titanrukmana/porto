import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import Header from "../components/molecules/header";
import Intro from "../components/templates/intro";
import Stack from "../components/templates/stack";
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
				<div style={{ backgroundColor: "#020100" }}>
					<Header />
					<Intro />
					<div style={{ marginBottom: 50 }} />
					<Stack />
				</div>
			</ThemeProvider>
		</>
	);
}
