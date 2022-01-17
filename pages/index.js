import Head from "next/head"
import Storyblok, { useStoryblok } from "../lib/storyblok"

import DynamicComponent from "../components/DynamicComponent"

export default function Home({ story }) {
  story = useStoryblok(story, true) // preview from getStaticProps to enableBridge

  return (
    <>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
      </Head>
      <div>
        {/* <pre>{JSON.stringify(story, null, 2)}</pre> */}
        <DynamicComponent blok={story.content} />
        {/* <h1>Home page</h1> */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  let { data } = await Storyblok.get("cdn/stories/home", {
    version: "draft"
  })

  return {
    props: {
      story: data.story
    },
    revalidate: 3600
  }
}
