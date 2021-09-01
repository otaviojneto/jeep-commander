import React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
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
  // TODO: Add image path
  metaTags = {
    title: 'JEEP COMMANDER',
    description: '',
    image: '',
  };

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content={this.metaTags.description}
          />
          <meta name="title" content={this.metaTags.title} />
          <meta
            property="og:title"
            content={this.metaTags.title}
          />
          <meta
            property="og:description"
            content={this.metaTags.description}
          />
          <meta
            property="og:image"
            content={this.metaTags.image}
          />
          <meta name="theme-color" content="#232324"></meta>

          <link
            rel="shortcut icon"
            href="https://www.jeep.com.br/content/dam/jeep/favicon.ico"
            type="image/x-icon"
          />
          <link href="fonts/fonts.css" rel="stylesheet" />

          <link
            rel="alternate"
            hrefLang="en-BD"
            href="https://www.jeep.com.bd/en"
          />
          <link
            rel="alternate"
            hrefLang="en-AU"
            href="https://www.jeep.com.au"
          />
          <link
            rel="alternate"
            hrefLang="nl-BE"
            href="https://www.jeep.be/nl"
          />
          <link
            rel="alternate"
            hrefLang="en-AG"
            href="https://www.jeep-caribbean.com/antigua"
          />
          <link
            rel="alternate"
            hrefLang="it-CH"
            href="https://www.jeep.ch/it"
          />
          <link
            rel="alternate"
            hrefLang="ar-AE"
            href="https://www.jeep.ae/ar/index.html"
          />
          <link
            rel="alternate"
            hrefLang="en-KH"
            href="https://www.jeep.com.kh"
          />
          <link
            rel="alternate"
            hrefLang="es-AR"
            href="https://www.jeep.com.ar/"
          />
          <link
            rel="alternate"
            hrefLang="en-GD"
            href="https://www.jeep-caribbean.com/grenada/"
          />
          <link
            rel="alternate"
            hrefLang="ar-BH"
            href="https://www.jeep-bahrain.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="en-BS"
            href="https://www.jeep-caribbean.com/bahamas"
          />
          <link
            rel="alternate"
            hrefLang="fr-FR"
            href="https://www.jeep.fr/"
          />
          <link
            rel="alternate"
            hrefLang="es-CR"
            href="https://www.jeep.cr/"
          />
          <link
            rel="alternate"
            hrefLang="en-AW"
            href="https://www.jeep-caribbean.com/aruba"
          />
          <link
            rel="alternate"
            hrefLang="en-BB"
            href="https://www.jeep-caribbean.com/barbados/"
          />
          <link
            rel="alternate"
            hrefLang="en-AE"
            href="https://www.jeep.ae/en/index.html"
          />
          <link
            rel="alternate"
            hrefLang="en-BM"
            href="https://www.jeep-caribbean.com/bermuda"
          />
          <link
            rel="alternate"
            hrefLang="fr-CH"
            href="https://www.jeep.ch/fr"
          />
          <link
            rel="alternate"
            hrefLang="de-AT"
            href="https://www.jeep.at/"
          />
          <link
            rel="alternate"
            hrefLang="en-GY"
            href="https://www.jeep-caribbean.com/guyana"
          />
          <link
            rel="alternate"
            hrefLang="es-US"
            href="https://es.jeep.com/"
          />
          <link
            rel="alternate"
            hrefLang="ar-LB"
            href="https://www.jeep-lebanon.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="en-BH"
            href="https://www.jeep-bahrain.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="cs-CZ"
            href="https://www.jeep.cz/"
          />
          <link
            rel="alternate"
            hrefLang="pt-BR"
            href="https://www.jeep.com.br/"
          />
          <link
            rel="alternate"
            hrefLang="es-CO"
            href="https://www.jeep.com.com"
          />
          <link
            rel="alternate"
            hrefLang="en-MN"
            href="https://www.jeep.mn/en"
          />
          <link
            rel="alternate"
            hrefLang="en-BL"
            href="https://www.jeep-caribbean.com/stbarths"
          />
          <link
            rel="alternate"
            hrefLang="el-GR"
            href="https://www.jeep.gr"
          />
          <link
            rel="alternate"
            hrefLang="en-BZ"
            href="https://www.jeep-caribbean.com/belize"
          />
          <link
            rel="alternate"
            hrefLang="fr-BE"
            href="https://www.jeep.be/fr"
          />
          <link
            rel="alternate"
            hrefLang="it-IT"
            href="https://www.jeep-official.it/"
          />
          <link
            rel="alternate"
            hrefLang="en-CA"
            href="https://www.jeep.ca/en"
          />
          <link
            rel="alternate"
            hrefLang="ko-KR"
            href="https://www.jeep.co.kr/"
          />
          <link
            rel="alternate"
            hrefLang="zh-HK"
            href="https://www.jeep.com.hk/zh"
          />
          <link
            rel="alternate"
            hrefLang="en-EG"
            href="https://www.jeep.com.eg/"
          />
          <link
            rel="alternate"
            hrefLang="en-JM"
            href="https://www.jeep-caribbean.com/jamaica"
          />
          <link
            rel="alternate"
            hrefLang="sk-SK"
            href="http://www.jeep.sk/"
          />
          <link
            rel="alternate"
            hrefLang="en-CW"
            href="https://www.jeep-caribbean.com/curacao/"
          />
          <link
            rel="alternate"
            hrefLang="en-KW"
            href="https://www.jeep-kuwait.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="es-MX"
            href="https://www.jeep.com.mx"
          />
          <link
            rel="alternate"
            hrefLang="ru-RU"
            href="https://www.jeep-russia.ru/"
          />
          <link
            rel="alternate"
            hrefLang="ja-JP"
            href="https://www.jeep-japan.com/"
          />
          <link
            rel="alternate"
            hrefLang="en-LK"
            href="https://www.jeep.com.lk/en/index.html"
          />
          <link
            rel="alternate"
            hrefLang="en-GA"
            href="https://www.jeep.ga"
          />
          <link
            rel="alternate"
            hrefLang="es-CL"
            href="https://www.jeep.cl/"
          />
          <link
            rel="alternate"
            hrefLang="en-BN"
            href="https://www.jeep.com.bn/en"
          />
          <link
            rel="alternate"
            hrefLang="en-GU"
            href="https://www.jeep.com/gu/"
          />
          <link
            rel="alternate"
            hrefLang="ar-KW"
            href="https://www.jeep-kuwait.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="id-ID"
            href="https://www.jeep-id.com/id/"
          />
          <link
            rel="alternate"
            hrefLang="ar-JO"
            href="https://www.jeep-jordan.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="fr-NC"
            href="https://www.jeep.nc/"
          />
          <link
            rel="alternate"
            hrefLang="ar-OM"
            href="https://www.jeep-oman.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="de-DE"
            href="https://www.jeep.de/"
          />
          <link
            rel="alternate"
            hrefLang="en-LB"
            href="https://www.jeep-lebanon.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="en-QA"
            href="https://www.jeep-qatar.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="ar-QA"
            href="https://www.jeep-qatar.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="en-SG"
            href="https://www.jeep.com.sg/en/index.html"
          />
          <link
            rel="alternate"
            hrefLang="fr-CA"
            href="https://www.jeep.ca/fr"
          />
          <link
            rel="alternate"
            hrefLang="en-ID"
            href="https://www.jeep-id.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="en-OM"
            href="https://www.jeep-oman.com/en/%20"
          />
          <link
            rel="alternate"
            hrefLang="en-HT"
            href="https://www.jeep-caribbean.com/haiti"
          />
          <link
            rel="alternate"
            hrefLang="es-ES"
            href="https://www.jeep.es/"
          />
          <link
            rel="alternate"
            hrefLang="en-US"
            href="https://www.jeep.com"
          />
          <link
            rel="alternate"
            hrefLang="ar-IQ"
            href="https://www.jeep-iraq.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="en-KN"
            href="https://www.jeep-caribbean.com/stkitts"
          />
          <link
            rel="alternate"
            hrefLang="en-JO"
            href="https://www.jeep-jordan.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="de-CH"
            href="https://www.jeep.ch/de"
          />
          <link
            rel="alternate"
            hrefLang="en-DM"
            href="https://www.jeep-caribbean.com"
          />
          <link
            rel="alternate"
            hrefLang="en-KY"
            href="https://www.jeep-caribbean.com/cayman"
          />
          <link
            rel="alternate"
            hrefLang="en-VG"
            href="https://www.jeep-caribbean.com/bvi"
          />
          <link
            rel="alternate"
            hrefLang="pt-PT"
            href="http://www.jeep.pt/"
          />
          <link
            rel="alternate"
            hrefLang="mn-MN"
            href="https://www.jeep.mn/mn/"
          />
          <link
            rel="alternate"
            hrefLang="en-GB"
            href="https://www.jeep.co.uk/"
          />
          <link
            rel="alternate"
            hrefLang="en-IN"
            href="https://www.jeep-india.com/"
          />
          <link
            rel="alternate"
            hrefLang="fr-PF"
            href="https://www.jeep-pf.com/fr%20"
          />
          <link
            rel="alternate"
            hrefLang="es-PR"
            href="https://www.jeeppr.com/"
          />
          <link
            rel="alternate"
            hrefLang="en-IQ"
            href="https://www.jeep-iraq.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="hu-HU"
            href="https://www.jeep.hu"
          />
          <link
            rel="alternate"
            hrefLang="vi-VN"
            href="https://www.jeep-vn.com"
          />
          <link
            rel="alternate"
            hrefLang="en-SA"
            href="https://www.jeep-saudi.com/en/"
          />
          <link
            rel="alternate"
            hrefLang="fr-MA"
            href="https://www.jeep.ma/"
          />
          <link
            rel="alternate"
            hrefLang="en-HK"
            href="https://www.jeep.com.hk/en"
          />
          <link
            rel="alternate"
            hrefLang="nl-NL"
            href="https://www.jeep.nl/"
          />
          <link
            rel="alternate"
            hrefLang="ar-SA"
            href="https://www.jeep-saudi.com/ar/"
          />
          <link
            rel="alternate"
            hrefLang="en-PH"
            href="https://www.jeep.com.ph/en"
          />
          <link
            rel="alternate"
            hrefLang="en-ZA"
            href="https://www.jeep.co.za"
          />
          <link
            rel="alternate"
            hrefLang="en-SX"
            href="https://www.jeep-caribbean.com/stmaarten/"
          />
          <link
            rel="alternate"
            hrefLang="en-MS"
            href="https://www.jeep-caribbean.com"
          />
          <link
            rel="alternate"
            hrefLang="pl-PL"
            href="https://www.jeep.pl/"
          />
          <link
            rel="alternate"
            hrefLang="en-SR"
            href="https://www.jeep-caribbean.com/suriname%20"
          />
          <link
            rel="alternate"
            hrefLang="en-TC"
            href="https://www.jeep-caribbean.com/turks"
          />
          <link
            rel="alternate"
            hrefLang="en-TT"
            href="https://www.jeep-caribbean.com/trinidad"
          />
          <link
            rel="alternate"
            hrefLang="tr-TR"
            href="https://www.jeep.com.tr/"
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