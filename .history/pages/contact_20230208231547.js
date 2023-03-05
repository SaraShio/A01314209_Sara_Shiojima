import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import { use, useState } from 'next/link'
import Navbar from ''

export default function Contact() {

/*    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const placeholderFirst = "First name";
    const placeholderLast = "Last name";
    const placeholderEmail = "Email"
    */

    return (
        <>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />


            <main className={styles.main}>
                <Navbar/>
                <Menu/>
                <header>
                <hr className={styles.line}></hr>
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                    <hr className={styles.line}></hr>
                </header>

                <div>
                    <p>Hello?
                    </p>
                </div>

                <div>
                    <form>
                        <fieldset className={styles.fieldset}>
                            <table>
                                <thead>
                                    <tr >
                                        <th>First Name:</th>
                                        <th>Last Name:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th >
                                            <input
                                                id="firstName" type="text"
                                                firstName={firstName}
                                                pattern="[A-Z]{1}[a-z]{2,10}"
                                                title="The first letter should be uppercase"
                                                placeholder={placeholderFirst}minLength="1"
                                                maxLength="30"
                                                required
                                            />
                                        </th>
                                        <th>
                                            <input className={styles.input_field}
                                                id="lastName" type="text"
                                                lastName={lastName}
                                                pattern="[A-Z]{1}[a-z]{2,10}"
                                                title="The first letter should be uppercase"
                                                placeholder="Last name here"
                                                minLength="1"
                                                maxLength="30"
                                                required />
                                        </th>
                                    </tr>
                                </tbody>
                
                            </table>
                        </fieldset>
                    </form>
                </div>

                <button type="submit">Submit</button>
            </main>

        </>
    )
}
