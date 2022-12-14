import Document, {
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Paytone+One&family=Teko:wght@300;400;700&display=swap" rel="stylesheet"></link>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Primary Meta Tags */}
          <meta name="description" content="Hevelen Jeronymo, Profissional de Educação Física especialista em gerar resultados. Flexibilidade para realizar seu treino em qualquer academia, sem ficar preso a horários. Personal Trainer em Londrina-PR" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.heveleneducadorafisica.com.br/" />
          <meta property="og:description" content="Hevelen Jeronymo, Profissional de Educação Física especialista em gerar resultados. Flexibilidade para realizar seu treino em qualquer academia, sem ficar preso a horários. Personal Trainer em Londrina-PR" />
          <meta property="og:image" content="https://i.ibb.co/tpMhLY4/heve-metatag.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.heveleneducadorafisica.com.br/" />
          <meta property="twitter:description" content="Hevelen Jeronymo, Profissional de Educação Física especialista em gerar resultados. Flexibilidade para realizar seu treino em qualquer academia, sem ficar preso a horários. Personal Trainer em Londrina-PR" />
          <meta property="twitter:image" content="https://i.ibb.co/tpMhLY4/heve-metatag.jpg"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}