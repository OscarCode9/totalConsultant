import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Map from './Map';
import Form from './Form';

const hrStyle = {
  height: '2px',
  color: 'black',
  backgroundColor: 'black',
  width: '20%',
  marginLeft: 0,
}

export default class Contacto extends Component {
  render() {
    return (
      <div>
        <Container style={{ paddingTop: '30px' }} >
          <Row style={{ textAlign: 'left' }} >
            <Col lg={12}>
              <Row style={{ paddingBottom: '30px' }}>
                <Col lg={12} >
                  <h4 style={{ fontWeight: 700 }} >CONTACTO</h4>
                </Col>
                <hr style={hrStyle} />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={6} style={{ textAlign: 'left' }} >
              <Form />
            </Col>
            <Col lg={6} ><Map></Map></Col>

          </Row>
        </Container>
      </div>
    )
  }
}
