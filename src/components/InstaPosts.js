import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Container, Card } from "react-bootstrap"
import Image from "gatsby-image"

const query = graphql`
  {
    allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 3) {
      nodes {
        id
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const InstaPosts = () => {
  const data = useStaticQuery(query)
  const {
    allInstaNode: { nodes: posts },
  } = data
  return (
    <section className="insta my-3">
      <h1 className="text-center py-2">Recent Insta Posts</h1>
      <div className="underline"></div>
      <Container>
        <Row>
          {posts.map(item => {
            return (
              <Col lg={4} key={item.id}>
                <Card className="services-card">
                  <a
                    href={`https://www.instagram.com/p/${item.id}/`}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <Image fluid={item.localFile.childImageSharp.fluid} />
                  </a>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default InstaPosts
