import type { AppProps } from "next/app";
import { global } from "stitches.config";

const globalStyles = global({
  html: {
    fontFamily: "$regular",
    color: "$black",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}
export default MyApp;
