import Head from "next/head"
import Storyblok, { useStoryblok } from "../lib/storyblok"
import DynamicComponent from "../components/DynamicComponent"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home({ story }) {
  story = useStoryblok(story, true)

  return (
    <>
      <Head>
        <title>{story ? `TimTim - ${story.name}` : "TimTim Blog"}</title>
      </Head>
      <div id="page-wrapper">
        <Navbar />
        {/* <pre>{JSON.stringify(story, null, 4)}</pre> */}
        <DynamicComponent blok={story.content} />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home"

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_relations: ["all-posts.posts", "selected-posts.posts"]
  })

  return {
    props: {
      story: data ? data.story : false
    },
    revalidate: 3600
  }
}

export async function getStaticPaths() {
  let { data } = await Storyblok.get("cdn/links/")

  let paths = []
  Object.keys(data.links).forEach(linkKey => {
    if (data.links[linkKey].is_folder) {
      return
    }

    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split("/")
    if (slug === "home") splittedSlug = false

    paths.push({ params: { slug: splittedSlug } })
  })

  return {
    paths: paths,
    fallback: false
  }
}
