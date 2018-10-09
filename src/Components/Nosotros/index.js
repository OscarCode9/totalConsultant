import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

import Slider from './Slide'
const styleContainer = {
  padding: '0px',
  border: '2px solid #e1e1e1',
  backgroundColor: 'whitesmoke',
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
        <Slider />
        <Container style={styleContainer}  ><br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col lg={12}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >NOSOTROS</h4>
                <hr style={hrStyle} />
                <p className="textWho">
                  Somos un grupo de expertos multidisciplinarios que conjuntamos nuestra experiencia Contable-fiscal y de recursos humanos, creando y desarrollando servicios con base en las necesidades de cada cliente, nos actualizamos constantemente para tener la mejor opinión en los servicios que proporcionamos.
                </p>
                <p className="textWho">
                  Desde 2004, otorgamos servicios para el Capital Humano y las actividades inherentes a su administración.
                </p>

                <p className="textWho">
                  En el 2009 TCS se fortalece por la inclusión de servicios contables, fiscales y legales
                </p>

                <p className="textWho">
                  En 2018 TCS incluye los servicios Inmobiliarios, con ello creamos valor a nuestra gama de servicios incorporando expertos en elramo
                </p>
                <h4 style={{ fontWeight: 700 }} >NUESTRA VISIÓN</h4>
                <hr style={hrStyle} />
                <p className="textWho">
                Ser la mejor oferta de servicios, consultoría y asesoría para personas físicas y morales en el ámbito de los negocios formales y legales en México.
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
