import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Kolker+Brush&display=swap" rel="stylesheet"/> 
      </Head>
      <body className='font-poppins relative overflow-x-hidden dark:bg-zinc-900 dark:text-white transition-colors duration-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
