import Image from "next/image"
import styles from "../styles/Hero.module.scss"

const Hero = ({ blok }) => {
  const { image, title, colour, category, intro_text } = blok

  return (
    <section className={styles.hero}>
      <div
        className={styles.color}
        style={{ backgroundColor: colour || "#e1e1e1" }}
      ></div>
      <div className={styles.container}>
        <Image
          src={image.filename || "/logo.svg"}
          width={50}
          height={30}
          layout="responsive"
          alt="timtim"
        />

        <div className={styles.dates}>
          <h4>{category ? category : null}</h4>
        </div>
        <h1 className={styles.title}>{title.toUpperCase() || "POST TITLE"}</h1>
        <p className={styles.text}>{intro_text ? intro_text : null}</p>
      </div>
    </section>
  )
}

export default Hero
