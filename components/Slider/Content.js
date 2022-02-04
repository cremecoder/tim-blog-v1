import Card from "../Card"
import styles from "../../styles/Content.module.scss"

function Content({ posts }) {
  return (
    <section
      className={styles.content}
      style={{
        "grid-template-columns":
          posts.length <= 1 ? "100%" : `repeat(${posts.length}, 75%)`
      }}
    >
      {posts.map((post, index) => (
        <div className={styles.center}>
          <Card cardDetails={post} key={post.uuid} />
        </div>
      ))}
    </section>
  )
}

export default Content
