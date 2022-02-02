import { sbEditable } from "@storyblok/storyblok-editable"

import Card from "../Card"
import styles from "../../styles/AllPostsGrid.module.scss"

const AllPostsGrid = ({ blok }) => {
  return (
    <div className={styles.grid} {...sbEditable(blok)}>
      {blok.posts
        ? blok.posts.map(post => <Card cardDetails={post} key={post.uuid} />)
        : null}
    </div>
  )
}

export default AllPostsGrid
