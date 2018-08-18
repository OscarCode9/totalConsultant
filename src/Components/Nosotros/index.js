import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap';
import img1  from './img/1.jpeg'
import img2  from './img/2.png'

const styleContainer = {
  padding: '0px',
  border: '2px solid #e1e1e1',
  backgroundColor: 'whitesmoke',
}

const imgOneStyle = {
  width: '100%' 
}


const hrStyle = {
  height: '2px',
  color: 'black',
  backgroundColor: 'black',
  width: '20%',
  marginLeft: 0,
}



export default class Nosotros extends Component {
  render() {
    return (
      <div>
        <Container style ={styleContainer}  >
        <Row style={{
          paddingRight: '15px',
          paddinLeft: '15px'
          }} >
          <Col lg= {8} style = {{ padding: '0px'}} >
            <img style={imgOneStyle}  src={img1} alt = 'img1' />
          </Col>
          <Col lg= {4} style = {{
            backgroundImage: "url(" + img2+ ")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '142% auto',
            padding: '0px'
          }} >
          </Col>
        </Row>
        <Row>
        <Col  lg={12}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >NOSOTROS</h4>
                <hr style = {hrStyle} />
                <p className="textWho">
                  Somo un grupo de expertos fiscales, legales y de recursos humanos,
                  creando y desarrollando servicios con base en las necesidades de cada cliente,
                  nos actualizamos constantemente para tener la mejor opinión.
                </p>
                <p className="textWho">
                Desde 2004, otorgamos servicios para el Capital Humano y
                 las actividades inherentes a su administración. 
                </p>

                <p className="textWho">
                En el 2009 TCS se fortalece por la inclusión de servicios contables,
                 fiscales y legales. 
                </p>
                <h4 style={{ fontWeight: 700 }} >NUESTRA VISIÓN</h4>
                <hr style = {hrStyle} />
                <p className="textWho">
                Ser una sociedad dedicada a ofrecer servicios, asesoria y consultoria
                 a personas físicas 
                  y morales en el ámbito de los negocios formales y legales en México. 
                </p>
                
              </div>
            </Col>
        </Row>
        </Container>
      </div>
    )
  }
}
