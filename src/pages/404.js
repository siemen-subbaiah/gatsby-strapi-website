import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const errorPage = () => {
  return (
    <Layout>
      <SEO title="Dead End" description="error" />
      <section>
        END OF THE ROAD!!!
        <Link to="/">
          <button>Home</button>
        </Link>
      </section>
    </Layout>
  )
}

export default errorPage
