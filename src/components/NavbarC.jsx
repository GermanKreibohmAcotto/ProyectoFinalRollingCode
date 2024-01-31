
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../components/css/NavbarC.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"

const NavbarC = () => {

  const [palabraClave, setPalabraClave] = useState("")
  
  const handleChange = (ev) => {
    setPalabraClave(ev.target.value)
  }

  const handleClick = (ev) => {
    ev.preventDefault()
    window.location=`/result/${palabraClave}`
  }

  return (
    <>
      <Navbar expand="lg" className="cNavbar">
        <Container fluid>
          <Navbar.Brand href="/">Logo</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form>
              <Row className='jusify-content-center'>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Por ej: caramelos"
                    className=" mr-sm-2"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button onClick={handleClick}>Buscar</Button>
                </Col>
              </Row>
            </Form>
            <Nav>
              <Link to="#link" className='nav-link'>Iniciar Sesion</Link>
              <Link to="#link" className='nav-link'>Registrarse</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export default NavbarC