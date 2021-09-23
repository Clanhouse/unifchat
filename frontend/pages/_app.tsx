import type { AppProps } from "next/app";
import { globalCss } from "stitches.config";

const globalStyles = globalCss({
  html: {
    fontFamily: "$regular",
    color: "$black",
    backgroundColor: "$background",
  },
  body: {
    margin: 0,
  },
  "*": {
    boxSizing: "border-box",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}
export default MyApp;
