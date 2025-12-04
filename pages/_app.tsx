import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Care Collaborative - System Status</title>
				<meta name="description" content="Real-time status and uptime monitoring for Care Collaborative AI training platforms" />
				<meta property="og:title" content="Care Collaborative Systems Status" />
				<meta property="og:description" content="Monitor the real-time status of Care Collaborative patient simulation, workplace training, and feedback evaluation platforms" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
