import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PagerDuty Addressbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          PagerDuty Addressbook
        </h1>
      </main>
    </div>
  )
}
