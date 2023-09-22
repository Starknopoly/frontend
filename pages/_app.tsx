import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Starknopoly",
  description: "Onchain monopoly",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ChakraProvider>
        <Head>
          <title>Starknopoly</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
