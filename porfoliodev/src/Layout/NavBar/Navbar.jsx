import styles from './Navbar.module.css'
import Link from 'next/link'

// pour les routes
const Links = [
    {
        id:1,
        Title: "HOME",
        url: "/",
    }, {
        id:2,
        Title: "ABOUT",
        url: "/About",
    }, {
        id:3,
        Title: "CONTACT",
        url: "/Contact",
    },

]

// pour la navbar
const Navbar = () => {
    return (
        <>
            
            {/* connecter au style */}
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>Portfolio</Link>
            
                {/* connecter au style */}
                <div className={styles.NavLinks}>

                    {/* liens */}
                    {
                        Links.map((Linkr) => (
                            <Link key={Linkr.id} href={Linkr.url} className={styles.navLink}>{Linkr.Title}</Link>
                        ))
                    }

                </div>

            </div>

        </>
    );
};

export default Navbar 