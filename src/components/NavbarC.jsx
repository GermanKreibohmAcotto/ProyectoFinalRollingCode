
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

  const publicar = (values) => {
    console.log(values);
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
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default NavbarC