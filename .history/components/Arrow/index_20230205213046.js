import styles from './Arrow.module.css'

export default function Arrow({
    page = "home",
}) {
    return (

        page.toLowerCase() == "home"?
        <div></div>

        <a><span><img></img></span></a>

    )
}