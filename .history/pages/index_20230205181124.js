import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="og:title" content="Assignment #1 - Home Page" />
        <meta name="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href='favicon.png' />
      </Head>

      <main>

        <header>
          <h1>An investment in knowledge pays the best interest.</h1>
        </header>

        <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>

        <a> <button>More About Us</button></a>

        <a> <button>Contact Us</button></a>

<Link page

      </main>
    </>
  )
}
