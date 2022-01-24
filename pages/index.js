import Head from "next/head"
import Storyblok, { useStoryblok } from "../lib/storyblok"

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
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  let getStory = await Storyblok.get("cdn/stories/home", {
    version: "draft"
  })

  return {
    props: {
      story: getStory.data.story
    },
    revalidate: 3600
  }
}
