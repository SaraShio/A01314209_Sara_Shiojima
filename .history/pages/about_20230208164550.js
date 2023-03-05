import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import Arrow from '../components/Arrow'

export default function About() {
    return (
        <>
            <head>
                <title>About Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - About Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />
            </head>

            <main>
                <header>
                    <div><h1>About Us</h1></div>
                    <div><h1>123</h1></div>
                </header>
                <div><p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p></div>
                <div><p>Our students gain the technical skills, real-worl experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidle changin workforce</p></div>
                <div><p>Through close collaboration with induster, our network of alumni and partners continue to achive global sucess. </p></div>

                <div><h2>Information Sessions</h2></div>
                <div><p>Information sessions are a cimple way to figure out the next step along your career path. Learn morea about the programs that interest you.</p></div>
                <div><h3>Big Info</h3></div>
                <div><p>Big info is that largest program expo and information session at BCIT. It's  your chance to find out about all our programs - from business, computing, and health to enineering, trades, and applied sciences.</p></div>
                <div><p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023</p></div>
                <div><h2>Campus Tours</h2></div>

                <div><p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p></div>


                <div id="carouselImage" className={styles.carouselImage}>
                    <img src={"public/carousel-images/0.jpg"} />
                    <img src={"public/carousel-images/1.jpg"} />
                    <img src={"public/carousel-images/2.jpg"} />
                    <img src={"public/carousel-images/3.jpg"} />
                    <img src={"public/carousel-images/4.jpg"} />
                    <img src={"public/carousel-images/5.jpg"} />
                </div>

                <div>
                    <img src={'icons/leftArrow.png'} />
                    <div id="testOnImageHere" className={styles.testOnImageHere}></div>
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
