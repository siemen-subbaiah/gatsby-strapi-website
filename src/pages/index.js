import React from "react"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Skills from "../components/Skills"
import SimpleReactLightbox from "simple-react-lightbox"

const index = () => {
  return (
    <Layout>
      <SEO title="Home" description="this is our home page!" />
      <Hero />
      <Skills />
      <SimpleReactLightbox>
        <Gallery />
      </SimpleReactLightbox>
    </Layout>
  )
}

export default index
