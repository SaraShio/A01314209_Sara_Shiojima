import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import { use, useState } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Arrow from '../components/Arrow'


export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const placeholderFirst = "First name here";
    const placeholderLast = "Last name here"
    const placeholderEmail = "Email here"

    return (
        <>
            <title>Contact Us</title>
            <meta name="author" content="MDIA 2109"></meta>
            <meta property="og:title" content="Assignment #1 - Contact Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href='/favicon.png' />

            <main className={styles.main} im>
                <Menu />
                <Navbar />
                <header className={styles.heading}>
                    <hr className={styles.line}></hr>
                    <div className={styles.header}><h1>Contact Us</h1></div>
                    <hr className={styles.line}></hr>
                </header>
                <div className={styles.subheading}>
                    <p >Want to discuss? Let's chat!</p>
                </div>

                <div className={styles.form}>
                    <form>
                        <fieldset className={styles.fieldset}>
                            <table>
                                <thead>
                                    <tr >
                                        <th scope="col" className={styles.label}>First Name:</th>
                                        <th scope="col" className={styles.label}>Last Name:</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th >
                                            <input
                                                className={styles.collection}
                                                id="firstName"
                                                type="text"
                                                firstName={firstName}
                                                pattern="[A-Z]{1}[a-z]{2,10}"
                                                title="The first letter should be uppercase"
                                                placeholder={placeholderFirst}
                                                minLength="3"
                                                maxLength="25"
                                                required
                                            />
                                        </th>

                                        <th>
                                            <input
                                                className={styles.collection}
                                                id="lastName"
                                                type="text"
                                                lastName={lastName}
                                                pattern="[A-Z]{1}[a-z]{2,10}"
                                                title="The first letter should be uppercase"
                                                placeholder={placeholderLast}
                                                minLength="3"
                                                maxLength="25"
                                                required
                                            />
                                        </th>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr><th className={styles.label}>Email:</th></tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>
                                            <input
                                                className={styles.collection}
                                                id="email"
                                                type="text"
                                                email={email}
                                                pattern="[/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/"
                                                title="The first letter should be uppercase"
                                                placeholder={placeholderEmail}
                                                minLength="3"
                                                maxLength="40"
                                                required
                                            />
                                        </th>
                                    </tr>
                                </tfoot>

                            </table>

                        </fieldset>
                    </form>
                </div>
               

                
                <button type="submit" className={styles.button}>Submit</button>
                <Arrow page = "Contact" />
            </main>

        </>
    )
}