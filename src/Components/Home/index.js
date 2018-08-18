import React, { Component } from 'react'
import Slide from './Slide'
import './style.css'
import { Row, Col, Container } from 'reactstrap';
const pStyle = {
  fontFamily: 'Helvetica',
  fontSize: '40px',
  fontWeight: 700,
  transition: '1s',
  padding: '0px'
}

const buttonStyle = {
  backgroundImage: 'linear-gradient(to right, #FF5D00 , #FF7D00)',
  fontFamily: 'Helvetica',
  fontSize: '25px',
  fontWeight: 700,
  border: 'none',
  color: 'white',
  width: '23%'
}

const info = {
  padding: '0px',
  border: '2px solid #e1e1e1',
  backgroundColor: 'whitesmoke',
}

const hrStyle = {
  height: '2px',
  color: 'black',
  backgroundColor: 'black',
  width: '30%',
  marginLeft: 0,
}


export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      services : [
        'Estrategia y organización',
        'Desarrollo corporativo',
        'Fiscales',
        'Administración operacional',
        'Finanzas corporativas',
        'Administración informática',
        'Contabilidad',
        'Planeamiento estratégico',
        'Seguridad Social',
        'Legal',
        'Payrolling'
      
      ]
    }
  }
  render() {
    return (
      <div>
        <Slide />
        <h4 style={{
          paddingTop: '20px',
          paddingBottom: '0px',
          fontSize: '35px',
        }}>
          Asegúrate el éxito de tu compañía
          </h4>
        <p style={pStyle}>
          Asesores contables, fiscales y administrativos
        </p>

        <div className="form-row text-center">
          <div className="col-12">
            <button style={buttonStyle} >CONTÁCTANOS</button>
          </div>
        </div>
        <br />

        <Container>
          <Row>
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >NOSOTROS</h4>
                <hr style = {hrStyle} />
                <p className="textWho">
                  Somo un grupo de expertos fiscales, legales y de recursos humanos,
                  creando y desarrollando servicios con base en las necesidades de cada cliente,
                  nos actualizamos constantemente para tener la mejor opinión.
                </p>
                <p className="readMore">{'LEER MAS >>'} </p>
              </div>
            </Col>
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >NUESTRA VISIÓN</h4>
                <hr style = {hrStyle} />
                <p className="textWho">
                  Ser una sociedad dedicada a ofrecer servicios, asesoria y consultoria a personas físicas 
                  y morales en el ámbito de los negocios formales y legales en México. 
                </p>
                <p className="readMore">{'LEER MAS >>'} </p>
              </div>
            </Col>
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >SERVICIOS</h4>
                <hr style = {hrStyle} />
                  <ul style={{padding: '0px'}} className="textWho">
                    {
                      this.state.services.map((service, index) => {
                        return (<li key={index} >
                          {service}
                        </li>)
                      })
                    }
                  </ul>
                <p className="readMore">{'LEER MAS >>'} </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
