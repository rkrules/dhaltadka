import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Jekyll Blog</title>
        <meta name="description" content="My personal website and blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Site</h1>
        <p className="text-lg mb-4">
          This is a Next.js site with a Jekyll-powered blog.
        </p>
        <a 
          href="/blog" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Visit Blog
        </a>
      </main>
    </>
  )
}