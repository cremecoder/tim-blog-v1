import DynamicComponent from "../DynamicComponent"
import Hero from "../Hero"

import Navbar from "../Navbar"
import Footer from "../Footer"

const Post = ({ blok }) => {
  return (
    <div id="page-wrapper">
      <Navbar isHome={false} />
      <Hero blok={blok} />
      {blok.body
        ? blok.body.map(blok => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
      <Footer />
    </div>
  )
}

export default Post
