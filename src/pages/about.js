import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"

const about = ({ data }) => {
  const {
    strapiAbout: { Title, description, big_description },
  } = data
  return (
    <Layout>
      <SEO title="About Me" description="about (username)" />
      <section className="about">
        <Container>
          <Row className="about-main align-items-center">
            <Col lg={6}>
              <h1>{Title}</h1>
              <p>{description}</p>
            </Col>
            <Col lg={6}>
              <p>{big_description}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiAbout {
      Title
      description
      big_description
    }
  }
`

export default about
