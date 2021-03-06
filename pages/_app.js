import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

// import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "../theme";

import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';

import 'mdb-ui-kit/css/mdb.min.css';

import GlobalStyle from "../components/globalStyles";

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" /> */}
        {/* <link rel="stylesheet" href="/static/css/style.css" /> */}
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="description" content="This is the Yu Ohno's portfolio sites." />
        
      </Head>
      {/* <ThemeProvider theme={theme}> */}
        <GlobalStyle />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Header />
        <div className="pb-5">

        
        <Component {...pageProps} />
        </div>
        <Footer />
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
