import Document, { Head, Html, Main, NextScript } from "next/document";

export const metadata = {
  title: "Isometria",
  description: "Isometric Grid Art",
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <Head>
          <title>Privacy Policy - Isometria</title>
          <meta name="description" content="Privacy Policy Isometria" />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:title" content="Privacy Policy - Isometria" />
          <meta
            property="og:description"
            content="Privacy Policy of Isometria"
          />
          <link rel="icon" href={getImagePath("/images/AppIcon.png")} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
