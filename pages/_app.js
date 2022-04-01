import Head from "next/head";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { Footer } from "components";
import 'styles/globals.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const progress = new ProgressBar({
	size: 4,
	color: "#fe595e",
	className: "z-50",
	delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return (
		<div className="selection:bg-red-400 selection:text-white overflow-x-hidden">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
			</Head>
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
// pk.eyJ1IjoiYXNhZGRldiIsImEiOiJjbDFldzl1bHQwdm52M2NucjV1Z2dxYjk4In0.pWndVqWASZ2jJgSk4Cejsg