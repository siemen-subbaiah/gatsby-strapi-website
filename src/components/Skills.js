import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allStrapiSkills {
      nodes {
        title
        description
        id
      }
    }
  }
`

const Skills = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiSkills: { nodes: skills },
  } = data

  return (
    <section className="services">
      <div className="services-content py-3">
        <h1 className="text-center">SKILLS</h1>
      </div>
      <div className="cover"></div>
      <Container>
        <Row className="skills-cards">
          {skills.map(skill => {
            return (
              <Col lg={4} key={skill.id}>
                <Card className="mt-4">
                  <Card.Header>
                    <h2 className="text-center">{skill.title}</h2>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text
                      className="skill-para"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {skill.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
