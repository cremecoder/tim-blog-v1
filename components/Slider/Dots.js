import styles from "../../styles/Dots.module.scss"

const Dots = ({ posts }) => {
  return (
    <div
      className={styles.group}
      style={{ visibility: posts.length <= 1 ? "hidden" : "visible" }}
    >
      {posts.map((post, index) => (
        <span key={post.uuid} className={styles.dot}></span>
      ))}
    </div>
  )
}

export default Dots
