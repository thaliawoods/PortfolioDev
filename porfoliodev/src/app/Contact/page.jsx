import styles from './Contact.module.css'
import Image from 'next/image'
import Button from '@/Components/Button/Button'
// import ContactImg from 'public/contact.png'

// création contact
const Contact = () => {
    return (
        <>
    {/* connecter style */}
            <div className={styles.Contact}>
                <h2>Get In Touch</h2>
                    <div className="ContactContent">
                        <div className="Img">
                            <Image src="/Image/Contact.png" alt="About Contact" width={500} height={300} />
                            {/* <Image src={contactImg} fill className='ContactImg' /> */}
                        </div>

    {/* connecter style */}

                        <form className={styles.ContactForm}>
                            <input type="text" placeholder='Enter Your Name' className={styles.box} />
                            <input type="email" placeholder='Enter Your Email' className={styles.box} />
                            <textarea name="" className={styles.textarea} placeholder='How can we help you?' id="" cols="30" rows="10"></textarea>
                            <Button LinkUrl="#" BtnText="Submit"/>
                        </form>

                    </div>
            </div>

        </>
    )
}

export default Contact
