import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Arrow from '../components/Arrow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href='/favicon.png' />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <header>
            <h1>An investment in knowledge pays the best interest.</h1>
          </header>

          <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
          <div>
            <a href='/about'> <button>More About Us</button></a>

            <a href='/contact'> <button>Contact Us</button></a>
          </div>
        </div>
        <Arrow page="Home" />
      </main>
    </>
  )
}
