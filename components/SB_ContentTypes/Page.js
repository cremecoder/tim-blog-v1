import DynamicComponent from "../DynamicComponent"

const Page = ({ blok }) => (
  <>
    {blok.body
      ? blok.body.map(blok => <DynamicComponent blok={blok} key={blok._uid} />)
      : null}
  </>
)

export default Page
