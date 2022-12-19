import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import Header from "../components/molecules/header";
import Intro from "../components/templates/intro";
import { theme } from "../styles/theme";
import Porto from "../components/templates/porto";
import About from "../components/templates/about";
import Tools from "../components/templates/tools";
import Top from "../components/molecules/top";
import Contact from "../components/templates/contact";
import Footer from "../components/templates/footer";

export default function Home() {
	return (
		<>
			<div>
				<Head>
					<title>Titan Rukmana</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta property="og:url" content="https://titanrukmana.my.id" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Titan Rukmana's Brief Portfolio" />
					<meta property="og:description" content="Titan Rukmana's brief portfolio as a full-stack developer" />
					<meta
						property="og:image"
						content="https://titanrukmana.my.id/_next/image?url=%2Fshowcase%2FPhotobooth.png&w=1920&q=75"
					/>

					<link rel="shortcut icon" href="/icon/favicon.ico" />
				</Head>
			</div>
			<ThemeProvider theme={theme}>
				<Header />
				<Top />
				<Intro />
				<About />
				<Porto />
				<Tools />
				<Contact />
				<Footer />
			</ThemeProvider>
		</>
	);
}
