import Storyblok, { useStoryblok } from "../../lib/storyblok"
import DynamicComponent from "../../components/DynamicComponent"

const Post = ({ story }) => {
  story = useStoryblok(story, true) // preview from getStaticProps to enableBridge

  return (
    <>
      {/* <pre>{JSON.stringify(story, null, 2)}</pre> */}
      <DynamicComponent blok={story.content} />
    </>
  )
}

export default Post

export async function getStaticPaths() {
  let { data } = await Storyblok.get("cdn/links/", {
    starts_with: "posts/",
    version: "draft"
  })

  // console.log(data)

  let paths = []
  Object.keys(data.links).forEach(linkKey => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return
    }

    const slug = data.links[linkKey].slug

    let newSlug = slug.replace("posts", "")
    let splittedSlug = newSlug.split("/")[1]

    paths.push({ params: { post: splittedSlug } })
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let { data } = await Storyblok.get(`cdn/stories/posts/${params.post}`, {
    version: "draft"
  })

  return {
    props: {
      story: data.story
    },
    revalidate: 3600
  }
}
