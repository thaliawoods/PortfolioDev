import styles from './page.module.css'
import Image from 'next/image'
// import HomeImage from "/Image/Home.png"
import Button from '@/Components/Button/Button'


// page home
export default function Home() {
  return (
    <>
    
    {/* connecter style */}
    <div className={styles.HomeMain}>

      {/* connecter style */}
      <div className={styles.HomeContent}>

        {/* contenu home */}
        <h6>
          PORTFOLIO
        </h6>

      {/* connecter style */}
        <p className={styles.Desc}>
        Après une expérience professionnelle diversifiée dans des secteurs tels que la vente, la restauration, et le social, ainsi que d'une expérience internationale, j'ai récemment embrassé la volonté d'explorer un nouveau domaine passionnant : le développement informatique !

Actuellement à la recherche d'une opportunité d'alternance d'un an à partir de février 2024, avec un rythme de 4 jours en entreprise et 1 jour en formation, je suis convaincue que mon profil correspond à vos attentes.

Je suis en formation chez Ada Tech School, une école inclusive et féministe spécialisée dans le développement web et la conception d'applications, et je suis déterminée à obtenir mon Diplôme RNCP de niveau VI.        </p>

       {/* pour bouton */} 
       <Button LinkUrl="https://youtube.com" BtnText="Github"/>

       <Button LinkUrl="https://youtube.com" BtnText="LinkedIn"/>

      </div>  

      {/*connecter style*/}
      <div className={styles.HomeContent}>

            {/*pour image*/}
          {/* A VERIFIER 21:57 */}
          <Image src="/Image/Home.png" alt="Home Image" width={500} height={300} />

        {/* autre manière de faire : <Image src={HomeImage} className={styles.HomeImg} />       */}
      
      </div>
    </div>
    
    </>
  );
}
