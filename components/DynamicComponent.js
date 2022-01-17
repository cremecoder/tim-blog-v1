import Page from "./SB_ContentTypes/Page"
import TextBlock from "./SB_Nestable/TextBlock"

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  "text-block": TextBlock
}

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]

    return <Component blok={blok} key={blok._uid} />
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
