import createEmotionCache from "@/createEmotionCache";
import theme from "@/theme";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
  Component: PageComponent;
}
export type PageComponent<T = unknown> = NextPage<T> & {
  auth?: boolean;
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
