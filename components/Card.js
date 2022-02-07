import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.scss"

const Card = ({ cardDetails }) => {
  const {
    full_slug,
    created_at,
    content: { colour, image, tag, title, category }
  } = cardDetails

  function formatDate(str) {
    let removeTime = [...str].splice(0, 10)
    removeTime.splice(0, 2)

    return removeTime.join("")
  }

  return (
    <Link href={full_slug || "/"}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={image.filename}
            width={50}
            height={35}
            layout="responsive"
            alt="timtim"
          />
        </div>
        <div style={{ backgroundColor: colour }} className={styles.copy}>
          <div className={styles.top}>
            <h4 className={styles.small}>{formatDate(created_at)}</h4>
            {category ? <h4 className={styles.small}>{category}</h4> : null}
          </div>
          <div className={styles.center}>
            <h2 className={styles.name}>{title}</h2>
          </div>
          <div className={styles.bottom}>
            {tag ? <span className={styles.tag}>{tag}</span> : "..."}
            <Image src={"/arrow-right.svg"} width={25} height={25} alt="blog" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
