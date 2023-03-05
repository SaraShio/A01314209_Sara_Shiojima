import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Head>
      <title>Home</title>
      <meta name="author" content="MDIA 2109" />
      <meta name="og:title" content="Assignment #1 - Home Page" />
      <meta name="og:description" content="BCIT Digital Design and Development Diploma" />
      <link rel="icon" href='favicon.png' />
    </Head>



test.describe('Main area', () => {
  test('Header Tag', async({ page }) => {
      await page.goto(urlHome)

      await expect(page.locator('h1')).toContainText('An investment in knowledge pays the best interest.');
  })

  )
}