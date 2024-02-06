import Image from 'next/image'
import styles from './About.module.css'
// import AboutPageImg from 'public/About.png'


// création page about
const About = () => {
    return (
        <>
        {/* connecter style about */}
            <div className={styles.AboutMain}>
                {/* connecter image */}
                <div className={styles.AboutImgParent}>
                    {/* A REFAIRE QUAND ROUTE BIEN CONNECTÉ*/}
          <Image src="/Image/About.png" alt="About Image" width={500} height={300} />
                    {/* <Image src={AboutPageImg} className={styles.AboutImg} fill /> */}
                
                    {/*connecter le style content about*/}
                    <div className={styles.AboutContent}>
                        {/* contenu */}
                        <h2>ABOUT</h2>
                        <h5>Thalia Woods</h5>
                    </div>
                </div>

                {/*connecter le style aux + de details*/}
                <div className={styles.MoreDetails}>
                    {/*pour + de details*/}
                    <div className={styles.Desc}>
                        Je mappelle
                    </div>
                    <div className={styles.Desc}>
                        Jaime
                    </div>
                </div>

            </div>
        </>
    )
}


export default About 