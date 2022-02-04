// import { useState, useEffect } from "react"
import { sbEditable } from "@storyblok/storyblok-editable"
import Slider from "../Slider/Slider"

import styles from "../../styles/SelectedPosts.module.scss"

// width check here dynamic import, useEffect and window object

const SelectedPosts = ({ blok }) => {
  // const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  // const [height, width] = size

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSize([window.innerHeight, window.innerWidth])
  //   }
  //   window.addEventListener("resize", handleResize)
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  return (
    <section className={styles.selected} {...sbEditable(blok)}>
      <h2 className={styles.text}>MORE...</h2>
      {/* If width > ... then ... else ... */}
      <Slider posts={blok.posts} />
    </section>
  )
}

export default SelectedPosts
