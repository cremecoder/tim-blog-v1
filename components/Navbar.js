import Image from "next/image"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.images}>
          <Image src="/logo.svg" width={37} height={51} alt="timtim" />
          <Image src="/instagram.svg" width={23} height={23} alt="instagram" />
        </div>
        <div className={styles.copy}>
          <h1 className={styles.title}>BEHIND THE SCENES</h1>
          <p className={styles.text}>
            An in-depth insight into my design process. Weekly updates of how I
            take ideas from concept to finished piece.
          </p>
        </div>
        <Image src="/instagram.svg" width={23} height={23} alt="instagram" />
      </div>
    </nav>
  )
}

export default Navbar
