import Document, { Head, Main, NextScript } from 'next/document'

import css from '../styles/global.css';

export default class MyDocument extends Document {
    render() {
        return (
            <html className={css.Html}>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Muli:200i,400,700" rel="stylesheet" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body className={css.Body}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}