import { Link } from "gatsby"
import React from "react"
import { Col, Row, Button, Carousel } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    img1: strapiHeroImages(name: { eq: "img-1" }) {
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    img2: strapiHeroImages(name: { eq: "img-2" }) {
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    img3: strapiHeroImages(name: { eq: "img-3" }) {
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  return (
    <section className="hero">
      <div className="containermy">
        <Row className="align-items-center justify-content-center hero-main">
          <Col lg={6}>
            <div className="hero-contents">
              <h1 className="hero-quote mb-4">
                In photography there is a reality so subtle that it becomes more
                real than reality.
              </h1>
              <h1 className="hero-heading">
                I'm <span> Vipul</span>,
              </h1>
              <p className="lead">
                I'm a profesional photographer and a video editor
              </p>
              <Link to="/contact">
                <Button variant="primary" className="btn-lg">
                  Contact me
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <Carousel className="img-carousel">
              <Carousel.Item>
                <Image
                  fluid={data.img1.image.childImageSharp.fluid}
                  className="hero-img"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid={data.img2.image.childImageSharp.fluid}
                  className="hero-img"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid={data.img3.image.childImageSharp.fluid}
                  className="hero-img"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Hero
