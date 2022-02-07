import { sbEditable } from "@storyblok/storyblok-editable"
import Slider from "../Slider/Slider"

import styles from "../../styles/SelectedPosts.module.scss"

const SelectedPosts = ({ blok }) => {
  return (
    <section className={styles.selected} {...sbEditable(blok)}>
      <h2 className={styles.text}>MORE...</h2>
      <Slider posts={blok.posts} />
    </section>
  )
}

export default SelectedPosts
