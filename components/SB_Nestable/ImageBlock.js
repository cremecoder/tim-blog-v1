import Image from "next/image"
import { sbEditable } from "@storyblok/storyblok-editable"

const ImageBlock = ({ blok }) => {
  return (
    <section style={{ padding: "1rem 0" }} {...sbEditable(blok)}>
      <Image
        src={blok.image.filename || "/logo.svg"}
        width={50}
        height={30}
        layout="responsive"
        alt="timtim"
      />
    </section>
  )
}

export default ImageBlock
