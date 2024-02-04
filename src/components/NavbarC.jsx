
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
import Swal from 'sweetalert2';
import * as Yup from "yup";


const NavbarC = () => {
  const token = JSON.parse(sessionStorage.getItem("token"))
  const role = JSON.parse(sessionStorage.getItem("role"))
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const singOff = (ev) => {
    ev.preventDefault()
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role")
    location.href = "/"
  }

  const [formValuesR, setFormValuesR] = useState({
    correo: "",
    contrasenia: "",
    rcontrasenia: ""
  })
  const [formValuesI, setFormValuesI] = useState({
    correo: "",
    contrasenia: "",
  })

  const handleChangeI = (ev) => {
    const { name, value } = ev.target
    setFormValuesI({ ...formValuesI, [name]: value })
  }

  const sendFormI = async (ev) => {
    ev.preventDefault()
    const { correo, contrasenia } = formValuesI
    console.log(formValuesI)

    if (!correo || !contrasenia) {
      Swal.fire({
        title: "Oops...",
        text: "Algun campo esta vacio",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
      });
    } else {
      const sendFormLogin = await fetch('http://localhost:3002/api/users/login', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          correo: correo,
          contrasenia: contrasenia,
        })
      })
      const dataI = await sendFormLogin.json()
      if (dataI.role === "user") {
        sessionStorage.setItem("token", JSON.stringify(dataI.token))
        sessionStorage.setItem("role", JSON.stringify(dataI.role))
        location.href = "/user"
      } else if (dataI.role === "admin") {
        sessionStorage.setItem("token", JSON.stringify(dataI.token))
        sessionStorage.setItem("role", JSON.stringify(dataI.role))
        location.href = "/admin"
      } else {
        Swal.fire({
          title: "Oops...",
          text: "No encontramos coincidencia con esos datos",
          icon: "error",
          confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
          </svg>`
        });
      }

    }
  }

  const handleChangeR = (ev) => {
    const { name, value } = ev.target
    setFormValuesR({ ...formValuesR, [name]: value })
  }

  const sendFormR = async (ev) => {
    ev.preventDefault()
    console.log(formValuesR)
    const { correo, contrasenia, rcontrasenia } = formValuesR
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)
    if (regex == false) {
      console.log("hola")
      Swal.fire({
        title: "Oops...",
        text: "Formato incorrecto del correo electronico",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
      });
    }
    if (!correo || !contrasenia || !rcontrasenia) {
      Swal.fire({
        title: "Oops...",
        text: "Algun campo esta vacio",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
      });
    } else {
      if (contrasenia === rcontrasenia) {
        const sendFormRegister = await fetch('http://localhost:3002/api/users', {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            correo: correo,
            contrasenia: contrasenia,
          })
        })


        const dataR = await sendFormRegister.json()
        if (dataR) {
          Swal.fire({
            title: "Se registro con exito",
            text: "Seras redirigido para iniciar sesion",
            icon: "success",
          });
        }
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Las contraseñas no coinciden",
          icon: "error",
          confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
        </svg>`
        });
      }
    }

  }

  const [palabraClave, setPalabraClave] = useState("")

  const handleChange = (ev) => {
    setPalabraClave(ev.target.value)
  }

  const handleClick = (ev) => {
    ev.preventDefault()
    window.location = `/result/${palabraClave}`
  }

  return (
    <>
      <Navbar expand="lg" className="cNavbar">
        <Container fluid>
          <Navbar.Brand href={token && role === "user" ? "/user" : token && role === "admin" ? "/admin" : "/"}>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">


            {
              token && role === "user"
                ?
                <>
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
                    <Nav.Link href="#link">
                      Sobre Nosotros
                    </Nav.Link>
                    <Nav.Link href="#link">
                      Contacto
                    </Nav.Link>
                    <Nav.Link href="#link">
                      Favoritos
                    </Nav.Link>
                    <Nav.Link href="#link">
                      Carrito
                    </Nav.Link>
                  </Nav>
                </>
                : token && role === "admin"
                  ?
                  <>
                    <Nav>
                      <Nav.Link href="#link">
                        Usuarios
                      </Nav.Link>
                      <Nav.Link href="#link">
                        Productos
                      </Nav.Link>
                    </Nav>
                  </>
                  :
                  <>
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
                      <Nav.Link href="#link">
                        Sobre Nosotros
                      </Nav.Link>
                      <Nav.Link href="#link">
                        Contacto
                      </Nav.Link>
                    </Nav>
                  </>
            }
            {
              token && role
                ?
                <Nav>
                  <Button variant="primary" onClick={singOff}>
                    Cerrar sesion
                  </Button>
                </Nav>
                :
                <Nav>
                  <Button variant="primary" onClick={handleShow}>
                    Iniciar Sesion
                  </Button>
                  <Button variant="primary" onClick={handleShow2}>
                    Registrarse
                  </Button>
                </Nav>
            }

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
              <Form.Control name="correo" type="email" placeholder='EJ: mail@mail.com' onChange={handleChangeI} value={formValuesI.correo} minLength={"8"} maxLength={"50"} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasenia" placeholder='Contraseña' type="password" className='mb-3' onChange={handleChangeI} value={formValuesI.contrasenia} minLength={"8"} maxLength={"30"} />
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
              <Form.Control name="correo" placeholder='EJ: mail@mail.com' type="email" onChange={handleChangeR} value={formValuesR.correo} minLength={"8"} maxLength={"50"} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasenia" placeholder='Minimo 8 caracteres' type="password" className='mb-3' onChange={handleChangeR} value={formValuesR.contrasenia} minLength={"8"} maxLength={"30"} />

            </Form.Group>
            <Form.Group>
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control name="rcontrasenia" placeholder='Repetir contraseña' type="password" className='mb-3' onChange={handleChangeR} value={formValuesR.rcontrasenia} minLength={"8"} maxLength={"30"} />

            </Form.Group>
            <Button onClick={sendFormR}>Registrate</Button>
            <Form.Text id="errorCampoVacioR" className='text-danger'>

            </Form.Text>
          </Form>
        </Modal.Body>
      </Modal>
    </>

  )
}

export default NavbarC