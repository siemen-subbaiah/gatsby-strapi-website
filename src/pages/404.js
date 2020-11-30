import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { Button, Container, Jumbotron, Row } from "react-bootstrap"

const errorPage = () => {
  return (
    <Layout>
      <SEO title="Dead End" description="error" />
      <section className="error-page">
        <Container>
          <Row className="d-flex flex-column justify-content-center align-items-center dead-end">
            <Jumbotron fluid className="text-center p-5">
              <h1>DEAD END!!</h1>
              <p>
                Sorry, we can't find the page which your searching for,hop on to
                the home page!
              </p>
              <Link to="/">
                <Button variant="primary" className="btn-lg">
                  HOME
                </Button>
              </Link>
            </Jumbotron>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default errorPage
