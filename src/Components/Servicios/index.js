import React, { Component } from 'react'
import { Row, Col, Container, Collapse,CardBody, Card } from 'reactstrap'
import uniqid from 'uniqid';

const hrStyle = {
  height: '2px',
  color: 'black',
  backgroundColor: 'black',
  width: '100%',
  marginLeft: 0,
}



const buttonStyle = {
  backgroundColor: '#FC7D1D',
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
        {
          id:  uniqid(),
          title: 'FISCALES',
          container: ['Analizamos las actividades de su negocio con base en las nuevas reformas fiscales.',
            'Revisamos la correcta aplicación contable.',
            'Buscamos estrategias fiscales que le permitan generar un crecimiento planeado y seguro.'],
          collapse: false
        },
        
        {
          id:  uniqid(),
          title: 'CONTABLE',
          container: [
            'Contabilidad General.',
            'Registros contables.',
            'Libros de Diario y Mayor.',
            'Estados Financieros.',
            'Consultoría y Planeación Fiscal.',
            'Cálculo y determinación correcta de impuestos.',
            'Impuesto Sobre la Renta.',
            'Impuesto al Valor Agregado.',
            'Impuesto sobre Nóminas.',
            'Declaraciones Informativas y anuales.',
            'Atención a auditorías.',
            'Asesoría Tributaria.',
            
            ],
          collapse: false
        },
       
        {
          id:  uniqid(),
          title: 'LEGALES',
          container: [
            'Corporativo',
            'Asesoría corporativa',
            'Elaboración de actas de asamblea.',
            'Elaboración y/o revisión de contratos mercantiles y civiles.',
            'Fusión y escisión de sociedades.',
            'Laboral',
            'Asesoría laboral.',
            'Revisión de contrato sindical.',
            'Elaboración y/o revisión de documentación laboral.',
            'Finiquitos e indemnizaciones.',
            'Atención juicios laborales.',
            'Atención a requerimientos de la Secretaría del trabajo y Previsión Social (STyPS).'
          ],
          collapse: false

        },
        {
          id:  uniqid(),
          title: 'SEGURIDAD SOCIAL',
          container: [
            'Asesoría para el cumplimiento de obligaciones de seguridad social y fiscales derivadas de sus relaciones laborales.',
            'La importancia que tiene el pago de cuotas del IMSS, INFONAVIT, SAR; así como el FONACOT e impuestos federales hacen que se requiera de revisión o supervisión constante ante las relaciones laborales en su organización.',
            'Asesoramos en actividades como:',
            'Las funciones principales de cada puesto de trabajo vs. la actividad principal y preponderante de la organización para validar la correcta clasificación del riesgo de trabajo y su reclasificación si fuese necesario.',
            'La administración de riesgos de trabajo.',
            'Propuesta o revisión percepciones y deducciones apegadas a las nuevas disposiciones legales.',
            'Si tienes prestaciones adicionales a Ley o estas buscando beneficios para tus empleados.',
            'Cálculo o revisión de las retenciones a empleados por ISR, Cuotas IMSS, Créditos Infonavit y otras.', 
            'Consultoría fiscal y de seguridad social.'
          ],
          collapse: false
        },
        {
          id:  uniqid(),
          title: 'PAYROLLING',
          container: [
            'Administración y control de tu costo de nómina',
            'El éxito y crecimiento de su organización se alcanza enfocando los recursos y esfuerzos necesarios en el giro de su negocio, en actividades tales como la atención y retención de clientes, nuevos servicios y productos y las necesidades de su mercado y el desarrollo de su personal.',
            'Para ello, podemos apoyar en las actividades administrativas como lo es la gestión de la nómina y la seguridad social podemos, optimizando sus costos a través de nuestro servicio de Maquila de nómina:',
            'Documentos laborales para la contratación de personal',
            'Movimientos aleatorios del IMSS'
      
          ],
          collapse: false
        }

      ]
     
    }
    

  }



  handleChangeCollapse = (e) => {
    const id = e.target.id;
    this.setState( prevState => {
      const newService = prevState.servicios.map( service  => {
        if ( service.id === id ){
          service.collapse = !service.collapse
        }
        return service
      })

      return {
        servicios: newService
      }

    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Container style={{ paddingTop: '30px' }} >
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
              {this.state.servicios.map(servicio => {
                console.log(servicio)
                const text = servicio.container.map(text => {
                  return (
                    <p>{text}</p>
                  )
                });

                return ( 

                  <Row style={{ paddingBottom: '30px' }}>
                  <Col lg={6} >
                    <h4 style={{ fontWeight: 700 }} >{servicio.title} <i id={servicio.id} onClick={this.handleChangeCollapse} style={{cursor: 'pointer'}} className="fas fa-angle-down"></i> </h4> 
                  </Col>
                  <Col lg={6} >
                    <Row>
                      <Col lg={6}>
                        <p>1 hr | Primer reunión</p>
                      </Col>
                      <Col style={{ padding: '10px' }} lg={6}>
                        <button style={buttonStyle} >COTIZAR</button>
                      </Col>
                    </Row>
                    <Row>
                    </Row>
                  </Col>
                  <Col lg = {12} >
                  <Collapse isOpen={servicio.collapse}>
                    <Card>
                      <CardBody>
                        {text}
                      </CardBody>
                    </Card>
                  </Collapse>
                  </Col>
                  
                  <hr style={hrStyle} />
                </Row>
                )

             } )}


            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}



