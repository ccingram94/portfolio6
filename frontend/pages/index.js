import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Hero from '../components/hero'
import AboutMe from '../components/aboutme'
import Experience from '../components/experience'
import Footer from '../components/footer'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import { motion } from 'framer-motion'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Constance Ingram</title>
        <meta name="description" content="web developer from Austin, Texas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col mx-auto justify-center items-center">
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
