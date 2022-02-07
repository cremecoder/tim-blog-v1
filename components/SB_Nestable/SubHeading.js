import { sbEditable } from "@storyblok/storyblok-editable"
import styles from "../../styles/SubHeading.module.scss"

const SubHeading = ({ blok }) => {
  return (
    <section {...sbEditable(blok)}>
      <div className={styles.container}>
        <h2 className={styles.text}>
          {blok.value.toUpperCase() || "SUB HEADING"}
        </h2>
      </div>
    </section>
  )
}

export default SubHeading
