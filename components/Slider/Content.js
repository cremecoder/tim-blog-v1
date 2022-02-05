import Card from "../Card"
import styles from "../../styles/Content.module.scss"

function Content({ posts }) {
  return (
    <section
      className={styles.content}
      style={{
        gridTemplateColumns:
          posts.length <= 1 ? "100%" : `repeat(${posts.length}, 75%)`
      }}
    >
      {posts.map(post => (
        <div className={styles.center} key={post.id}>
          <Card cardDetails={post} />
        </div>
      ))}
    </section>
  )
}

export default Content
