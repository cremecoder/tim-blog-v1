import Image from "next/image"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.images}>
          <a href="/" target="_blank">
            <Image src="/logo.svg" width={37} height={51} alt="timtim" />
          </a>
          <a href="https://www.instagram.com/tim.tim.tim.tim/" target="_blank">
            <Image
              src="/instagram.svg"
              width={23}
              height={23}
              alt="instagram"
            />
          </a>
        </div>
        <div className={styles.copy}>
          <h1 className={styles.title}>BEHIND THE SCENES</h1>
        </div>
        <div className={styles.icon}>
          <a href="https://www.instagram.com/tim.tim.tim.tim/" target="_blank">
            <Image
              src="/instagram.svg"
              width={23}
              height={23}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
