import Head from "next/head"
import Storyblok, { useStoryblok } from "../lib/storyblok"

import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Footer from "../components/Footer"

import styles from "../styles/HomeCards.module.scss"

export default function Home({ story, urls }) {
  story = useStoryblok(story, true) // preview from getStaticProps to enableBridge

  return (
    <>
      <Head>
        <title>{story ? `TimTim - ${story.name}` : "TimTim Blog"}</title>
      </Head>
      <div id="page-wrapper">
        <Navbar />
        {!urls.length ? (
          <main className={styles["no-cards"]}>
            Welcome to your blog Timi!
            <br /> Get started with your first post.
          </main>
        ) : (
          <main className={styles.grid}>
            {urls.map(post => (
              <Card key={post.id} slug={post.slug} />
            ))}
          </main>
        )}
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  let getStory = await Storyblok.get("cdn/stories/home", {
    version: "draft"
  })

  let getPostURLS = await Storyblok.get("cdn/links/", {
    starts_with: "posts/",
    version: "draft"
  })

  let urls = []
  Object.keys(getPostURLS.data.links).forEach(linkKey => {
    if (
      getPostURLS.data.links[linkKey].is_folder ||
      getPostURLS.data.links[linkKey].slug === "home"
    ) {
      return
    }

    const slug = getPostURLS.data.links[linkKey].slug
    const id = getPostURLS.data.links[linkKey].id
    urls.push({
      slug,
      id
    })
  })

  return {
    props: {
      story: getStory.data.story,
      urls
    },
    revalidate: 3600
  }
}

{
  /* <pre>{JSON.stringify(story, null, 2)}</pre> */
}
{
  /* <pre>{JSON.stringify(urls, null, 2)}</pre> */
}
