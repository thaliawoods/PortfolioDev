import styles from './Button.module.css'
import Link from 'next/link'

// création boutton
const Button = ({ BtnText,LinkUrl }) => {
    return (
        <>
        <Link href="https://youtube.com">
        {/* VERS 31:30 AUTRE MANIERE */}
        <button className={styles.Btn}>{BtnText}</button>
        </Link>
    </>
    )
}

export default Button 