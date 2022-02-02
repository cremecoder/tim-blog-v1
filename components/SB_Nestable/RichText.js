import Link from "next/link"
import { sbEditable } from "@storyblok/storyblok-editable"
import {
  render,
  NODE_OL,
  NODE_UL,
  NODE_HR,
  MARK_LINK
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
          },
          markResolvers: {
            [MARK_LINK]: (children, props) => {
              const { href, target, linktype } = props
              if (linktype === "email") {
                // Email links: add `mailto:` scheme and map to <a>
                return (
                  <a className={styles.link} href={`mailto:${href}`}>
                    {children}
                  </a>
                )
              }
              if (href.match(/^(https?:)?\/\//)) {
                // External links: map to <a>
                return (
                  <a className={styles.link} href={href} target={target}>
                    {children}
                  </a>
                )
              }
              // Internal links: map to <Link>
              return (
                <Link href={href}>
                  <a className={styles.link}>{children}</a>
                </Link>
              )
            }
          }
        })}
      </div>
    </section>
  )
}

export default RichText
