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
