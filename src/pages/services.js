import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from "gatsby-image"
import { graphql } from "gatsby"

const services = ({ data }) => {
  const {
    allStrapiServices: { nodes: services },
  } = data
  return (
    <Layout>
      <SEO title="Services" description="services we offer!" />
      <section className="services my-2">
        <h1 className="text-center ">SERVICES</h1>
        <Container>
          <Row>
            {services.map(item => {
              return (
                <Col lg={4} key={item.id}>
                  <Card className="mt-4 services-card">
                    <Image fluid={item.image.childImageSharp.fluid} />
                    <Card.Header>
                      <Card.Title>
                        <h3 className="text-center">{item.title}</h3>
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text style={{ fontSize: "1.2rem" }}>
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiServices {
      nodes {
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        title
        description
      }
    }
  }
`

export default services
