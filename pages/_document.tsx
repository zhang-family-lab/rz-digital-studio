import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <body className="bg-white text-slate-900 leading-tight">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}