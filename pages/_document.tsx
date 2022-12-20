import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});
	const initialProps = await Document.getInitialProps(ctx);
	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};
