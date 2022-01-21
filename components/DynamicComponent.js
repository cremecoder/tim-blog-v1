import Page from "./SB_ContentTypes/Page"
import Post from "./SB_ContentTypes/Post"
import AllPostsGrid from "./SB_Nestable/AllPostsGrid"
import ImageBlock from "./SB_Nestable/ImageBlock"
import RichText from "./SB_Nestable/RichText"
import SubHeading from "./SB_Nestable/SubHeading"
import TextBlock from "./SB_Nestable/TextBlock"

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  post: Post,
  "all-posts": AllPostsGrid,
  image: ImageBlock,
  "rich-text": RichText,
  "sub-heading": SubHeading,
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
