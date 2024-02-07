import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../components/css/FooterC.css'
import ImgC from '../components/ImgC.jsx'

const FooterC = () => {
  return (
    <>
      <Container fluid className='footer-style py-3 mt-auto'>
        <div className='d-flex justify-content-center text-center'>
          <Row className='align-items-center'>
            <Col sm={12} lg={3} className=''>
              <ImgC urlImage={'https://res.cloudinary.com/dqnqflduy/image/upload/v1707273799/wgbnztfg9lzpk6nsy4pz_jgprio.png'}
                alt={'logo'} width={'30%'}/>
            </Col>
            <Col sm={4} lg={3} className='p-3'>
            <b><u>Seguinos en nuestras redes</u></b>
              <Link className='nav-link' to='https://www.instagram.com/'>Instagram</Link>
              <Link className='nav-link' to={'https://twitter.com/?lang=es'}>Twitter</Link>
              <Link className='nav-link' to={'https://www.facebook.com/'}>Facebook</Link>
            </Col>
            <Col sm={4} lg={3}>
            <b><u>Ayuda</u></b>
              <Link className='nav-link' to='/nosotros'>Quienes somos?</Link>
              <Link className='nav-link' to='/contacto'>Contacto</Link>
              <Link className='nav-link' to='*'>Boton de arrepentimiento</Link>
              <Link className='nav-link' to='*'>Trabaja con nosotros</Link>
            </Col>
            <Col sm={4} lg={3}>
            <ImgC urlImage={'https://i0.wp.com/1.bp.blogspot.com/-tyDj3FH73V0/UVugtbI_MYI/AAAAAAAAGYE/TzM5UBA57QQ/s1600/Data-fiscal-Web.jpg'}
                alt={'QR data fiscal'} width={'30%'} />
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