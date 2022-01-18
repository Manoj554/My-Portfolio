import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class Myclass extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="manifest" href="manifest.json" />
                    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}