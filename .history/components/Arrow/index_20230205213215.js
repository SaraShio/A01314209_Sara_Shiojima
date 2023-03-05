import styles from './Arrow.module.css'

export default function Arrow({
    page = "home",
}) {
    return (

        page.toLowerCase() == "home" ?
            <div className={styles.arrow}><a><span><img src={''}></img></span></a>
            </div>


    )
}