import Image from "next/image"
import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <Image src="/instagram.svg" width={37} height={37} alt="timtim" />
          <h3 className={styles.bold}>@tim.tim.tim.tim</h3>
        </div>
        <span className={styles.span}>Code by Sean Martin</span>
      </div>
    </footer>
  )
}

export default Footer
