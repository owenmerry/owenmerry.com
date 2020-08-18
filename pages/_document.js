import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../helpers/analytics'

export default class MyDocument extends Document {

    render() {
        return (
          <Html lang="en">
            <Head>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
              <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                as="font"
                crossOrigin=""
              />
              <title>Front-end Developer | owenmerry.com</title>
                <meta property="og:title" content="Frontend Developer" />
                <meta property="og:description" content="Hello, I’m Owen. I Am A Front-end Developer From Dublin, Livin’ In London." />
                <meta property="og:image" content="https://owenmerry.com/share.png" />
                <meta property="og:url" content="https://owenmerry.com/" />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }



}