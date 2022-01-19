import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.scss"

const Card = ({ slug }) => {
  return (
    <Link href={"/" + slug}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={"/logo.svg"}
            width={50}
            height={35}
            layout="responsive"
            alt="timtim"
          />
        </div>
        <div style={{ backgroundColor: "#eee" }} className={styles.copy}>
          <div className={styles.top}>
            <h4 className={styles.date}>01-01-2022</h4>
            <h4 className={styles.week}>WEEK #1</h4>
            <h2 className={styles.name}>BITMAP CHICKENS</h2>
          </div>
          <div className={styles.bottom}>
            <span className={styles.tag}>Typography</span>
            <Image src={"/arrow-right.svg"} width={25} height={25} alt="blog" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
