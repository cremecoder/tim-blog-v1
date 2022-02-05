import Image from "next/image"
import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/tim.tim.tim.tim/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/instagram.svg" width={37} height={37} alt="timtim" />
          </a>
          <h3 className={styles.bold}>@tim.tim.tim.tim</h3>
        </div>
        <span className={styles.span}>
          Code by{" "}
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/sean-martin-cremecoder/"
            target="_blank"
            rel="noreferrer"
          >
            Sean Martin
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
