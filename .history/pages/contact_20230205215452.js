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
                <meta name="og:title" content="Assignment #1 - Contact Us Page" />
                <meta name="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='favicon.png' />
            </Head>


            <main>
                <div>
                    <h1>
                    </h1>
                </div>

                <div>
                    <p>
                    </p>
                </div>

                <div>
                    <form>
                        <fieldset>
                            <table>
                                <thead>
                                    <tr>

                                    </tr>
                                </thead>
                            </table>
                        </fieldset>
                    </form>
                </div>

                <button>Submit</button>

            </main>

        </>
    )
}
