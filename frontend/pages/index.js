import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Hero from '../components/hero'
import AboutMe from '../components/aboutme'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Constance Ingram</title>
        <meta name="description" content="web developer from Austin, Texas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col mx-auto h-screen w-screen justify-center items-center">
        <Hero />
        <AboutMe />
      </main>
    </div>
  )
}
