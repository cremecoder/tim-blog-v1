import { sbEditable } from "@storyblok/storyblok-editable"

import Card from "../Card"
import styles from "../../styles/AllPostsGrid.module.scss"

const AllPostsGrid = ({ blok }) => {
  return (
    <div className={styles.grid} {...sbEditable(blok)}>
      {blok.posts.map(post => (
        <Card blok={post} key={post.uuid} />
      ))}
      {/* <pre>{JSON.stringify(blok.posts, null, 4)}</pre> */}
    </div>
  )
}

export default AllPostsGrid
