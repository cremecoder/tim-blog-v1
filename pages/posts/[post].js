import Head from "next/head"
import Storyblok, { useStoryblok } from "../../lib/storyblok"
import DynamicComponent from "../../components/DynamicComponent"

import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

import styles from "../../styles/PostBody.module.scss"

const Post = ({ story }) => {
  story = useStoryblok(story, true)

  return (
    <>
      <Head>
        <title>{story ? `TimTim - ${story.name}` : "Post"}</title>
      </Head>
      <div id="page-wrapper">
        <Navbar />
        <main>
          <Hero content={story.content} />
          <div className={styles.container}>
            {story.content.body
              ? story.content.body.map(blok => (
                  <DynamicComponent blok={blok} key={blok._uid} />
                ))
              : null}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  let { data } = await Storyblok.get("cdn/links/", {
    starts_with: "posts/",
    version: "draft"
  })

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
