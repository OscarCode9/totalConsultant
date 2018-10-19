import React, { Component } from 'react'
import Slide from './Slide'
import './style.css'
import { Row, Col, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';


const pStyle = {
  fontFamily: 'Helvetica',
  fontSize: '38px',
  fontWeight: 700,
  transition: '1s',
  padding: '0px'
}

const buttonStyle = {
  backgroundColor: '#FC7D1D',
  fontFamily: 'Helvetica',
  fontSize: '22px',
  fontWeight: 700,
  border: 'none',
  color: 'white',
  width: '15%',
  cursor: 'pointer'
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


 class Home extends Component {
  constructor() {
    super()
    this.state = {
      services: [
        'Contables',
        'Fiscales',
        'Administrativos',
        'Inmobiliarios'
      ]
    }
  }

  goContacto =() =>{
    this.props.history.push('/contacto') 
  }
  goAbout = () => {
    this.props.history.push('/nosotros') 
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
          <br /><br /><br /> <br/>
          Asegúrate del éxito 
          </h4>
        <p style={pStyle}>
          Asesores contables, administrativos e inmobiliarios 
        </p>

        <div className="form-row text-center">
          <div className="col-12">
            <button onClick={this.goContacto} style={buttonStyle} >CONTÁCTANOS</button>
          </div>
        </div>
        <br />

        <Container>
          <Row>
            <Col style={info} lg={12}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >NOSOTROS</h4>
                <hr style={hrStyle} />
                <p className="textWho">
                  Somos un grupo de expertos multidisciplinarios que conjuntamos nuestra experiencia Contable-fiscal y de recursos humanos, creando y desarrollando servicios con base en las necesidades de cada cliente, nos actualizamos constantemente para tener la mejor opinión en los servicios que proporcionamos.
                </p>
                { /*
                  <p className="textWho">
                    Desde 2004, otorgamos servicios para el Capital Humano y las actividades inherentes a su administración.
                  </p>

                  <p className="textWho">
                    En el 2009 TCS se fortalece por la inclusión de servicios contables, fiscales y legales
                  </p>

                  <p className="textWho">
                    En 2018 TCS incluye los servicios Inmobiliarios, con ello creamos valor a nuestra gama de servicios incorporando
                    expertos en elramo
                  </p>
                */}
                

                <p className="readMore" onClick={this.goAbout}>{'LEER MAS >>'} </p>
              </div>
            </Col>

            {/*
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >NUESTRA VISIÓN</h4>
                <hr style={hrStyle} />

                <p className="textWho">
                  Ser la mejor oferta de servicios, consultoría y asesoría para personas físicas y morales en el ámbito de los negocios formales y legales en México.
                </p>


                <p className="readMore">{'LEER MAS >>'} </p>
              </div>
            </Col>
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 }} >SERVICIOS</h4>
                <hr style={hrStyle} />
                <ul style={{ padding: '0px' }} className="textWho">
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
            */}
            
          </Row>
        </Container>
      </div>
    )
  }
}


export default withRouter(Home);
