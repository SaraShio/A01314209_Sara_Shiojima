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
                    <div><h1>123</h1></div>
                    <div><h1>345</h1></div>
                </header>
                <div><p>443</p></div>
                <div><p>345</p></div>
                <div><p>45654</p></div>
                <div><p>567567</p></div>
                <div><p>56546</p></div>
                <div><p>56456</p></div>
                <div><p>456546</p></div>

                <div><h2>45645645</h2></div>
                <div><h2>6456546</h2></div>

                <div><h3>erwer</h3></div>

                <div id="carouselImage"><img src={"public/carousel-images/0.jpg"} /></div>

                <div>
                    <img src={'icons/leftArrow.png'} />
                    <div id="testOnImageHere"></div>
                    <img src={'icons/rightArrow.png'} />
                </div>

                <ul>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineerin</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                </ul>

                <Arrow page="About" />

            </main>
        </>
    )
}
