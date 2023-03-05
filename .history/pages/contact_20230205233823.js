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
                                            <th scope="one">First Name:</th>
                                            <th scope="one">Last Name:</th>
                                        </tr>
                                    </thead>
<tbody>
    <tr>
        <td>
            
        </td>
    </tr>
</tbody>
                                    <input
                                        id="firstName" type="text"
                                        firstName={firstName}
                                        placeholder={placeholderFirst}
                                        minLength="1"
                                        maxLength="15"
                                        required
                                    />
                                    <input
                                        id="lastName" type="text"
                                        lastName={lastName}
                                        email={email}
                                        placeholder={placeholderLast}
                                        minLength="1"
                                        maxLength="30"
                                        required
                                    />

                                </table>
                            </fieldset>
                        </form>
                    </div>

                    <button>Submit</button>
                </header>
            </main>

        </>
    )
}
