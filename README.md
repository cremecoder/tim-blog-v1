# TimTim Blog - Next.js and Storyblock CMS

A blog for creative content built with NextJS and Storyblok CMS. Makes use of the Storyblok API and visual block editor, and also features web hooks and incremental static regeneration to deploy new posts.

> Visit the live site: https://www.tim-tim.co.uk/
>
> Deployed and hosted on [Vercel](https://vercel.com/)

<br>

## What I Learned

### Next.js Routing

I became more comfortable with the Next.js way of fetching data, passing the data as props at build time, and generating new paths for created posts using getStaticPaths and getStaticProps functions. Also my first introduction to using catch-all routes in Next.

### Connecting the Storyblok Bridge to the Visual Editor

I chose Storyblok as the CMS because of its visual block editor for the content creator to better customize each blog post. The Storyblok bridge (**lib/storyblok.js**) required a fair bit of configuration to work with the visual editor and update it in real time.

### React Components as "Bloks"

Building React components as editable blocks and content types made me have to think differently about how to structure my code as well as using SASS modules to help with modularising each block. I also spent alot of time reading the documentation to get a full grasp on how this headless CMS worked with React and Next.

<br>

## Potential Future Features

- Filter tab on homepage for filtering blogs by category.
- Add more blocks and make them more customizable.
- Create more content-types with different layouts.

<br>

## Note on running these files locally

I have permission from the client to show this source code, but it's unable to be run locally at this time. I have plans to create a local only version of this project for others to run in their own developer environment.
