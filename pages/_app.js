import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className="selection:bg-red-400 selection:text-white">
  			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
