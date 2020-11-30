import React from "react"
import { Card, Col, Container, Form, Button, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="contact me (username)" />
      <section className="contact my-4 py-3">
        <Container>
          <Row className="align-items-center contact-main">
            <Col lg={6}>
              <div className="contact-content">
                <h1>Contact us</h1>
                <p>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Esse, minus!{" "}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <Card>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button
                      variant="primary"
                      className="btn-block"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default contact
