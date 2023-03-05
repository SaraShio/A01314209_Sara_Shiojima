import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import Arrow from '@/components/Arrow'

export default function About() {
    return (
        <>
            <head>
                <title>About Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta name="og:title" content="Assignment #1 - About Us Page" />
                <meta name="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='favicon.png' />
            </head>

            <main>
                <header>
                    <div><h1></h1></div>
                    <div><h1></h1></div>
                </header>
                <div><p></p></div>
                <div><p></p></div>
                <div><p></p></div>
                <div><p></p></div>
                <div><p></p></div>
                <div><p></p></div>
                <div><p></p></div>

                <div><h2></h2></div>
                <div><h2></h2></div>

                <div><h3></h3></div>

                <div id="carouselImage"><img src={"public/carousel"}/></div>

                <div id="testOnImageHere"></div>

                <ul>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineerin</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                </ul>

                <Arrow page="About" />
                <Arrow page="About" />

            </main>
        </>
    )
}
