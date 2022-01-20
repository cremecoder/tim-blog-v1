import { sbEditable } from "@storyblok/storyblok-editable"
import styles from "../../styles/SubHeading.module.scss"

const SubHeading = ({ blok }) => {
  return (
    <section {...sbEditable(blok)}>
      <h2 className={styles.text}>{blok.value}</h2>
    </section>
  )
}

export default SubHeading
