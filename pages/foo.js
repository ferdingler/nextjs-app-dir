import Head from 'next/head'
import Link from "next/link";

export default function Home({ time }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Link href="/post/1">View Post</Link>
      </main>
    </div>
  )
}
