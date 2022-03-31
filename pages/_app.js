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
		<div className="selection:bg-red-400 selection:text-white">
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
