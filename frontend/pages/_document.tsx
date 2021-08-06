import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/logo.svg" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
