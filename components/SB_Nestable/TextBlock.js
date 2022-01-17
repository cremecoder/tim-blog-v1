import { sbEditable } from "@storyblok/storyblok-editable"

const TextBlock = ({ blok }) => {
  return (
    <div {...sbEditable(blok)}>
      {/* <pre>{JSON.stringify(blok, null, 2)}</pre> */}
      {blok.content}
    </div>
  )
}

export default TextBlock
