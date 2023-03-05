import {React, useState} from "react"
import Link from 'next/link'
import styles from './Menu.module.css'

export default function Menu(){
    return(
        <>
        <img className={styles.menu} src={'icons/menu-icon.png'}></img>
        </>
    )
}