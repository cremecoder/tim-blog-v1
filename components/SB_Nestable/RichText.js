import { sbEditable } from "@storyblok/storyblok-editable"
import {
  render,
  NODE_OL,
  NODE_UL,
  NODE_HR
} from "storyblok-rich-text-react-renderer"
import styles from "../../styles/RichText.module.scss"

const RichText = ({ blok }) => {
  return (
    <section {...sbEditable(blok)}>
      <div className={styles.container}>
        {render(blok.content, {
          nodeResolvers: {
            [NODE_OL]: children => <ol className={styles.list}>{children}</ol>,
            [NODE_UL]: children => <ul className={styles.list}>{children}</ul>,
            [NODE_HR]: children => <hr className={styles.hr}>{children}</hr>
          }
        })}
      </div>
    </section>
  )
}

export default RichText
