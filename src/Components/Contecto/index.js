import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

import Form from './Form';
import './style.css';


import map from './map.jpg';


const hrStyle = {
  height: '2px',
  color: 'black',
  backgroundColor: 'black',
  width: '20%',
  marginLeft: 0,
}

const imgStyle = {
  width: '100%',
  height: 'auto',
  marginLeft: 0,
}

export default class Contacto extends Component {

  render() {
    return (
      <div>
        <Container style={{ paddingTop: '30px' }} >
          <Row style={{ textAlign: 'left' }} >
            <Col lg={12}>
              <Row style={{ paddingBottom: '10px' }}>
                <Col lg={12} >
                  <h4 style={{ fontWeight: 700 }} >CONTACTO</h4>

                </Col>
                <hr style={hrStyle} />

              </Row>

              <Row  >

                <Col lg={6} style={{ textAlign: 'left' }} >
                  <p className="textRio">Rio Nazas 171</p>
                  <p className="textRio">Cuauhtémoc, 06500 Ciudad de México, CDMX</p>
                  <Form />
                </Col>
                <Col lg={6} >
                  <img style={imgStyle} src={map} alt="mapImg"/>
                </Col>
              </Row>



            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}
