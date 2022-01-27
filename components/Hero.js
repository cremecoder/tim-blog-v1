import Image from "next/image"
import styles from "../styles/Hero.module.scss"

const Hero = ({ blok }) => {
  const { date, image, title, colour, category, intro_text } = blok

  return (
    <section className={styles.hero}>
      <div className={styles.color} style={{ backgroundColor: colour }}></div>
      <div className={styles.container}>
        <Image
          src={image.filename}
          width={50}
          height={30}
          layout="responsive"
          alt="timtim"
        />

        <div className={styles.dates}>
          <h4>{date}</h4>
          <h4>{category ? category : ""}</h4>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{intro_text ? intro_text : ""}</p>
      </div>
    </section>
  )
}

export default Hero
