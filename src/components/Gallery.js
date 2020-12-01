import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Col, Row } from "react-bootstrap"
import Image from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"

const query = graphql`
  {
    allStrapiGallery {
      nodes {
        strapiId
        image {
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

const Gallery = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiGallery: { nodes: images },
  } = data
  return (
    <section className="gallery my-4">
      <h1 className="text-center">Gallery</h1>
      <div className="underline"></div>
      <Row>
        {images.map(item => {
          return (
            <Col lg={4} key={item.strapiId} className="p-0">
              <SRLWrapper>
                <Image
                  fluid={item.image.childImageSharp.fluid}
                  className="gallery-img"
                />
              </SRLWrapper>
            </Col>
          )
        })}
      </Row>
    </section>
  )
}

export default Gallery
