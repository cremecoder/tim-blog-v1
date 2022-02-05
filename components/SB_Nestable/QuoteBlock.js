import { sbEditable } from "@storyblok/storyblok-editable"
import styles from "../../styles/QuoteBlock.module.scss"

const QuoteBlock = ({ blok }) => {
  return (
    <figure {...sbEditable(blok)}>
      <div className={styles.container}>
        <blockquote className={styles.quote}>
          <h3>{blok.quote}</h3>
        </blockquote>
        <figcaption>
          {blok.author} <cite>{blok.cite}</cite>
        </figcaption>
      </div>
    </figure>
  )
}

export default QuoteBlock
