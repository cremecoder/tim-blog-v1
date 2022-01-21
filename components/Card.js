import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.scss"

const Card = ({ post }) => {
  const {
    full_slug,
    content: { image, colour, date, week, title, tag }
  } = post

  return (
    <Link href={"/" + full_slug}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={image.filename || "/logo.svg"}
            width={50}
            height={35}
            layout="responsive"
            alt="timtim"
          />
        </div>
        <div
          style={{ backgroundColor: colour || "#eee" }}
          className={styles.copy}
        >
          <div className={styles.top}>
            <h4 className={styles.date}>{date || Date.now()}</h4>
            <h4 className={styles.week}>{`WEEK #${week || "0"}`}</h4>
            <h2 className={styles.name}>{title}</h2>
          </div>
          <div className={styles.bottom}>
            <span className={styles.tag}>{tag}</span>
            <Image src={"/arrow-right.svg"} width={25} height={25} alt="blog" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
