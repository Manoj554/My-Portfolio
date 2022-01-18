import '../styles/globals.css';
import Head from 'next/head';
import Theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="google-site-verification" content="wOxpzwAmfE_PQcXsJoKNSrzG6ALvBzXFwlqbOhbIDKw" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="application-name" content="Manoj - portfolio" />
				<meta name="apple-mobile-web-app-title" content="Manoj - portfolio" />
				<meta name="msapplication-starturl" content="/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content="Manoj Kumar Mondal is an undergraduate student at IIIT-BBSR , he is a full stack web developer and he develops web applications using NextJs, ReactJs, and NodeJs." />

				<title>Manoj Kumar Mondal | Portfolio </title>
			</Head>
			<Theme>
				{/* {document.addEventListener('contextmenu', (e) => e.preventDefault())} */}
				<Component {...pageProps} />
			</Theme>
		</>
	)
}

export default MyApp;
