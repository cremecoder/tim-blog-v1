import styles from "../../styles/Slider.module.scss"
import Content from "./Content"
import Dots from "./Dots"

const Slider = ({ posts }) => {
  return (
    <div className={styles.slider}>
      <Content posts={posts} />
      <Dots posts={posts} />
    </div>
  )
}

export default Slider
