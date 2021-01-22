import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


// import Footer from '../components/Footer'
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{
            __html: `(function(d) {
              var config = {
                kitId: 'kka2nss',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);`,
          }}>
          </script>

          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `(function(w,s){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="https://cdn.pagesense.io/js/desksamplelab/f4bc4d4426ae46e1b835c8ddfef3fa96.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");`,
          }}></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
            if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
          }
            `,
          }}></script>
          <script> </script>
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
