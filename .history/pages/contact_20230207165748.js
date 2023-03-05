import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import { use, useState } from 'next/link'

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const placeholderFirst = "First name";
    const placeholderLast = "Last name";
    const placeholderEmail = "Email"

    return (
        <>
            <header>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />
            </header>


            <main>
                <header>
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                </header>

                <div>
                    <p>Hello?
                    </p>
                </div>

                <div>
                  <form>
                    <fieldset>
                        <table>
                            <thead>

                            </thead>
                        </table>
                    </fieldset>
                  </form>
                  
                </div>

                <button type="submit">Submit</button>
            </main>

        </>
    )
}
