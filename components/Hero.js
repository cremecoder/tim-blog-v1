import Image from "next/image"
import styles from "../styles/Hero.module.scss"

const Hero = ({
  content,
  content: { date, week, image, title, colour, intro_text }
}) => {
  return (
    <section className={styles.hero}>
      <div
        className={styles.color}
        style={{ backgroundColor: colour || "#cdd0d4" }}
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
          <h4> {date || "DATE HERE..."}</h4>
          <h4>{`WEEK #${week || 0}`}</h4>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{intro_text}</p>
      </div>
    </section>
  )
}

export default Hero
