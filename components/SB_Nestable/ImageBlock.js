import Image from "next/image"
import { sbEditable } from "@storyblok/storyblok-editable"
import styles from "../../styles/ImageBlock.module.scss"

const ImageBlock = ({ blok }) => {
  return (
    <section {...sbEditable(blok)}>
      <div className={styles.image}>
        <Image
          src={blok.image.filename || "/logo.svg"}
          width={50}
          height={30}
          layout="responsive"
          alt="timtim"
        />
      </div>
    </section>
  )
}

export default ImageBlock
