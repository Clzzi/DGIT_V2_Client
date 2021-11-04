import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="DGIT은 대구소프트웨어마이스터고 학생들의 개발 문화 개선을 위해 제작한 사이트입니다."
          />
          <meta charSet="utf-8" />
          <meta property="og:title" content="DGIT" />
          <meta property="og:url" content="https://dgit.b1nd.com" />
          <meta
            property="og:description"
            content="DGIT은 대구소프트웨어마이스터고 학생들의 개발 문화 개선을 위해 제작한 사이트입니다."
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

export default MyDocument;
