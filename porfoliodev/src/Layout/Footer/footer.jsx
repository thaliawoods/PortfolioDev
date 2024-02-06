import styles from "./footer.module.css"


// création du footer
const Footer = () => {
    return (
        <>

            {/* connecter au style */}
            <div className={styles.Footer}>
                <h6>&copy; Portfolio Thalia Woods</h6>
            </div>
        </>


    )
}

export default Footer