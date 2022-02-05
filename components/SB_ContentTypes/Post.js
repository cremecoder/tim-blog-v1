import DynamicComponent from "../DynamicComponent"
import Hero from "../Hero"

const Post = ({ blok }) => {
  return (
    <>
      <Hero blok={blok} />
      {blok.body
        ? blok.body.map(blok => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </>
  )
}

export default Post
