import DynamicComponent from "../DynamicComponent"

import Navbar from "../Navbar"
import Footer from "../Footer"

const Page = ({ blok }) => (
  <div id="page-wrapper">
    <Navbar isHome={true} />
    {blok.body
      ? blok.body.map(blok => <DynamicComponent blok={blok} key={blok._uid} />)
      : null}
    <Footer />
  </div>
)

export default Page
