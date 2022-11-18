import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>
                    OMEGA - Online Megagame and Email Game Association{" "}
                </title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="theme-color"
                    content="#2291CD"
                />
                <meta
                    name="description"
                    content="OMEGA - Online Megagame and Email Game Association"
                />
                <meta
                    name="msapplication-TileColor"
                    content="#2291CD"
                />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
