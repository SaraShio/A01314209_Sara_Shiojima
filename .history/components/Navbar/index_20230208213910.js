import styles from './Navbar.module.css'


export default function Navbar() {

    return (
        <>
            <nav className={styles.navbar}>
                <img className={styles.nav_icon} src={'public/icons/graduation-hat.png'}></img>
            </nav>
        </>
    )
}