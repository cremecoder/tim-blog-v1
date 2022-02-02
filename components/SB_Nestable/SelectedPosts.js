import { useState } from "react"
import { sbEditable } from "@storyblok/storyblok-editable"
import Card from "../Card"

import styles from "../../styles/SelectedPosts.module.scss"

const SelectedPosts = ({ blok }) => {
  const [current, setCurrent] = useState(0)
  const length = blok.posts.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className={styles.selected} {...sbEditable(blok)}>
      <h2 className={styles.text}>MORE...</h2>
      <button onClick={prevSlide}>Prev</button>
      <div className={styles.slider}>
        {blok.posts
          ? blok.posts.map((post, index) => (
              <div
                className={index === current ? styles.hidden : styles.card}
                key={index}
              >
                {index === current && (
                  <Card cardDetails={post} key={post.uuid} />
                )}
              </div>
            ))
          : null}
      </div>
      <button onClick={nextSlide}>Next</button>
    </section>
  )
}

export default SelectedPosts
