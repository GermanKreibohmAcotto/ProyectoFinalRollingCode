
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../components/css/NavbarC.css"
import { useState, useEffect } from "react"
import Modal from 'react-bootstrap/Modal';


const NavbarC = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [formValuesR, setFormValuesR] = useState({
    correo:"",
    contrasenia:"",
    rcontrasenia:""
  })
  const [formValuesI, setFormValuesI] = useState({
    correo:"",
    contrasenia:"",
  })

  const handleChangeI = (ev) => {
    const {name, value} = ev.target
    setFormValuesI({...formValuesI, [name]: value})
  }

  const sendFormI = (ev) => {
    ev.preventDefault()
    const { correo, contrasenia} = formValuesI
    console.log(formValuesI)
    
  }

  const handleChangeR = (ev) => {
    const {name, value} = ev.target
    setFormValuesR({...formValuesR, [name]: value})
  }

  const sendFormR = (ev) => {
    ev.preventDefault()
    const { correo, contrasenia, rcontrasenia} = formValuesR
    console.log(formValuesR)
    
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
                  />
                </Col>
                <Col xs="auto">
                  <Button >Buscar</Button>
                </Col>
              </Row>
            </Form>
            <Nav>
              <Button variant="primary" onClick={handleShow}>
                Iniciar Sesion
              </Button>
              <Button variant="primary" onClick={handleShow2}>
                Registrarse
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group>
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control name="correo" type="email" onChange={handleChangeI} value={formValuesI.correo}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasenia" type="password" className='mb-3' onChange={handleChangeI} value={formValuesI.contrasenia}/>
            </Form.Group>
            <Button onClick={sendFormI}>Iniciar Sesion</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control name="correo" type="email" onChange={handleChangeR} value={formValuesR.correo}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasenia" type="password" className='mb-3' onChange={handleChangeR} value={formValuesR.contrasenia}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control name="rcontrasenia" type="password" className='mb-3' onChange={handleChangeR} value={formValuesR.rcontrasenia}/>
            </Form.Group>
            <Button onClick={sendFormR}>Iniciar Sesion</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>

  )
}

export default NavbarC