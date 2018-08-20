import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
const hrStyle = {
  height: '2px',
  color: 'black',
  backgroundColor: 'black',
  width: '100%',
  marginLeft: 0,
}



const buttonStyle = {
  backgroundImage: 'linear-gradient(to right, #FF5D00 , #FF7D00)',
  fontFamily: 'Helvetica',
  fontSize: '25px',
  fontWeight: 500,
  border: 'none',
  color: 'white',
  width: '100%'
}


export default class Servicios extends Component {
  constructor() {
    super();
    this.state = {
      servicios: [
        'FISCALES',
        'CONTABLES',
        'LEGALES',
        'SEGURIDAD SOCIAL',
        'PAYROLLING'
      ]
    }
    
  }
  render() {
    return (
      <div>
        <Container style={{paddingTop: '30px'}} >
          <Row style={{ textAlign: 'left' }} >
            <Col lg={12}>
              <Row style={{ paddingBottom: '30px' }}>
                <Col lg={6} >
                  <h4 style={{ fontWeight: 700 }} >SERVICIOS</h4>
                </Col>
                <hr style={hrStyle} />
              </Row>
            </Col>
            <Col lg={12}>
            {this.state.servicios.map(servicio => (
              <Row style={{ paddingBottom: '30px' }}>
                <Col lg={6} >
                  <h4 style={{ fontWeight: 700 }} >{servicio} </h4>
                </Col>
                <Col lg={6} >
                  <Row>
                    <Col lg={6}>
                      <p>1 hr | Primer reunión</p>
                    </Col>
                    <Col style={{padding: '10px'}} lg={6}>
                      <button style={buttonStyle} >COTIZAR</button>
                    </Col>
                  </Row>
                </Col>
                <hr style={hrStyle} />
              </Row>
            ))}
              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
