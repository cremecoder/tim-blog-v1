import DynamicComponent from "../DynamicComponent"

const Post = ({ blok }) => (
  <>
    {blok.body
      ? blok.body.map(blok => <DynamicComponent blok={blok} key={blok._uid} />)
      : null}
  </>
)

export default Post
