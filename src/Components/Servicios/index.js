import React, { Component } from 'react'

import './style.css'
import { Row, Col, Container } from 'reactstrap';
 

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
  constructor() {
    super()
    this.state = {
      services: [
        'Contables',
        'Fiscales',
        'Administrativos',
        'Inmobiliarios'
      ],
      contable: [
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
        legales: [
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
        social: [

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
        pay: [
          'Administración y control de tu costo de nómina',
          'El éxito y crecimiento de su organización se alcanza enfocando los recursos y esfuerzos necesarios en el giro de su negocio, en actividades tales como la atención y retención de clientes, nuevos servicios y productos y las necesidades de su mercado y el desarrollo de su personal.',
          'Para ello, podemos apoyar en las actividades administrativas como lo es la gestión de la nómina y la seguridad social podemos, optimizando sus costos a través de nuestro servicio de Maquila de nómina:',
          'Documentos laborales para la contratación de personal',
          'Movimientos aleatorios del IMSS'
    
        ]
    }
  }
  render() {
    return (
      <div>
      
        <Container>
          <Row>
          <Col style={info} lg={6}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700 , color:  'rgb(252, 125, 29)'  }} >SEGURIDAD SOCIAL</h4>
                <hr style={hrStyle} />
                

                {
                  this.state.social.map((text, index) => {

                    return  ( 
                    <p key = {index} className="textWho">
                      {text}
                    </p>
                  )
                  })
                  
                }
                
              </div>
            </Col>

            <Col style={info} lg={6}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700, color:  'rgb(252, 125, 29)'  }} >PAYROLLING</h4>
                <hr style={hrStyle} />


                {
                  this.state.pay.map((text, index) => {

                    return  ( 
                    <p key = {index} className="textWho">
                      {text}
                    </p>
                  )
                  }) 
                }
                
               
              </div>
            </Col>
            
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700, color:  'rgb(252, 125, 29)'   }} >FISCALES</h4>
                <hr style={hrStyle} />
                <p className="textWho">
                  Analizamos las actividades de su negocio con base en las nuevas reformas fiscales.
                </p>

                <p className="textWho">
                  Revisamos la correcta aplicación contable.
                </p>

                <p className="textWho">
                  Buscamos estrategias fiscales que le permitan generar un crecimiento planeado y seguro.
                </p>

               
              </div>
            </Col>
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700, color:  'rgb(252, 125, 29)'  }} >CONTABLE</h4>
                <hr style={hrStyle} />

                <ul style={{ padding: '0px' }} className="textWho">
                  {
                    this.state.contable.map((service, index) => {
                      return (<li key={index} >
                        {service}
                      </li>)
                    })
                  }
                </ul>

              </div>
            </Col>
            <Col style={info} lg={4}>
              <div style={{ padding: '50px', textAlign: 'left' }} >
                <h4 style={{ fontWeight: 700, color:  'rgb(252, 125, 29)'   }} >LEGALES</h4>
                <hr style={hrStyle} />

                <ul style={{ padding: '0px' }} className="textWho">
                  {
                    this.state.legales.map((service, index) => {
                      return (<li key={index} >
                        {service}
                      </li>)
                    })
                  }
                </ul>

              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
    )
  }
}
