import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../components/css/FooterC.css'
import ImgC from '../components/ImgC.jsx'

const FooterC = () => {
  return (
    <>
      <Container fluid className='footer-style py-3 '>
        <div className='d-flex justify-content-center text-center'>
          <Row className='align-items-center'>
            <Col sm={12} lg={3}>
              <ImgC urlImage={'https://candygomitas.com.ar/wp-content/uploads/2022/04/00601043-510x510-1.png'}
                alt={'logo'} width={'55%'} />
            </Col>
            <Col sm={4} lg={3} className='p-3'>
            <b><u>Seguinos en nuestras redes</u></b>
              <Link className='nav-link' to='/'>Instagram</Link>
              <Link className='nav-link'>Twitter</Link>
              <Link className='nav-link'>Facebook</Link>
            </Col>
            <Col sm={4} lg={3}>
            <b><u>Ayuda</u></b>
              <Link className='nav-link'>Quienes somos?</Link>
              <Link className='nav-link'>Contacto</Link>
              <Link className='nav-link'>Boton de arrepentimiento</Link>
              <Link className='nav-link'>Trabaja con nosotros</Link>
            </Col>
            <Col sm={4} lg={3}>
            <ImgC urlImage={'https://i0.wp.com/1.bp.blogspot.com/-tyDj3FH73V0/UVugtbI_MYI/AAAAAAAAGYE/TzM5UBA57QQ/s1600/Data-fiscal-Web.jpg'}
                alt={'logo'} width={'30%'} />
            </Col>
          </Row>
        </div>
        <Row>
          <Col className='text-center mt-5'>
            CopyRight © 2021
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterC