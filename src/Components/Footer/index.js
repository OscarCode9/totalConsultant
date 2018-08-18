import React, { Component } from 'react'
import './style.css'
import {Container, Col, Row} from 'reactstrap'

const iStyle = {
  color: 'white',
  fontSize:'25px',
  padding: '5px'
}
export default class Footer extends Component {
  render() {
    return (
      <div className="footerStyle" >
        <Container>
          <Row style ={{ paddingTop:'20px' }} >
            
            <Col style={{padding: '0px'}}  lg = {6} >
              <p className="textCopy">
                {'© 2018 TOTAL CONSULTANT SERVICES'}
              </p>
            </Col>

            <Col lg = {6} >
            <div className='iconSocial' style={{
              float: 'right'
            }} >
              <i style={iStyle} className="fab fa-facebook-f"></i>
              <i style={iStyle} className="fab fa-twitter"></i>
              <i style={iStyle} className="fab fa-google-plus-g"></i>
            </div>
             
            </Col>
          
          </Row>
        </Container>
      </div>
    )
  }
}
