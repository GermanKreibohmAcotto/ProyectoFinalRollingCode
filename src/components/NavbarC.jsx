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
import clienteAxios, { config } from '../helpers/clientAxios';
import ImgC from './ImgC';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavbarC = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate()
  const token = JSON.parse(sessionStorage.getItem("token"))
  const role = JSON.parse(sessionStorage.getItem("role"))

  const singOff = (ev) => {
    ev.preventDefault()
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role")
    navigate("/")
  }
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
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
    try {
      ev.preventDefault()
      const { correo, contrasenia } = formValuesI
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
        const sendFormLogin = await clienteAxios.post('/users/login',
          {
            correo: correo,
            contrasenia: contrasenia,
          }, config)

        if (sendFormLogin.status === 200) {
            Swal.fire({
          title: "Inicio con exito",
          icon: "success"
        });
          if (sendFormLogin.data.role === "user") {
            sessionStorage.setItem("token", JSON.stringify(sendFormLogin.data.token))
            sessionStorage.setItem("role", JSON.stringify(sendFormLogin.data.role))
            sessionStorage.setItem("idUsuario", JSON.stringify(sendFormLogin.data.idUsuario))
            navigate("/user")
          } else if (sendFormLogin.data.role === "admin") {
            sessionStorage.setItem("token", JSON.stringify(sendFormLogin.data.token))
            sessionStorage.setItem("role", JSON.stringify(sendFormLogin.data.role))
            sessionStorage.setItem("idUsuario", JSON.stringify(sendFormLogin.data.idUsuario))
            navigate("/admin")
          }
        }
      }
    } catch (error) {
      if (error.response.status === 400) {
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
    try {
      ev.preventDefault()
      const { correo, contrasenia, rcontrasenia } = formValuesR
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)
      if (regex == false) {
        Swal.fire({
          title: "Oops...",
          text: "Formato incorrecto del correo electronico",
          icon: "error",
          confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
        })
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

          const sendFormR = await clienteAxios.post('/users', {
            correo: correo,
            contrasenia: contrasenia,
          }, config)

          if (sendFormR) {
            Swal.fire({
              title: "Se registro con exito",
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
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Surgio algun error en la creacion del usuario",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
    </svg>`
      });
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

  const getAllImages = async () => {
    try {

      const getAllImages = await clienteAxios.get('/images/')
      setImages(getAllImages.data.getAllImages)

    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Surgio algun error en la obtecion de productos",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
      });
    }
  }

  useEffect(() => {
    getAllImages()
  }, [])


  return (
    <>
      <Navbar expand="lg" className="cNavbar sticky-top">
        <Container fluid>
          <Navbar.Brand href={token && role === "user" ? "/user" : token && role === "admin" ? "/admin" : "/"}><ImgC urlImage={'https://res.cloudinary.com/dqnqflduy/image/upload/v1707273799/wgbnztfg9lzpk6nsy4pz_jgprio.png'} width={'150'} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {
              token && role === "user"
                ?
                <>
                  <Form className='d-flex justify-content-center'>
                    <Row className='d-flex jusify-content-center w-100'>
                      <Col className='pe-0 w-75'>
                        <Form.Control
                          type="text"
                          placeholder="Por ej: caramelos"
                          className="rounded-0 rounded-start-2"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col xs="auto" className='ps-0 '>
                        <Button onClick={handleClick} className='rounded-0 rounded-end-circle d-flex justify-content-center h-100 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search w-100" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></Button>
                      </Col>
                    </Row>
                  </Form>
                  <Nav>
                    <NavLink to="/nosotros" className='nav-link'>
                      Sobre Nosotros
                    </NavLink>
                    <NavLink to="/contacto" className='nav-link'>
                      Contacto
                    </NavLink>
                    <NavLink to="/fav" className='nav-link'>
                      Favoritos
                    </NavLink>
                    <NavLink to="/cart" className='nav-link'>
                      Carrito
                    </NavLink>
                  </Nav>
                </>
                : token && role === "admin"
                  ?
                  <>
                    <Nav>
                      <NavLink to="/usersAdmin" className='nav-link'>
                        Usuarios
                      </NavLink>
                      <NavLink to="/productsAdmin" className='nav-link'>
                        Productos
                      </NavLink>
                      <NavLink to="/imagesAdmin" className='nav-link'>
                        Imagenes
                      </NavLink>
                    </Nav>
                  </>
                  :
                  <>
                    <Form className='d-flex justify-content-center'>
                      <Row className='d-flex jusify-content-center w-100'>
                        <Col className='pe-0 w-75'>
                          <Form.Control
                            type="text"
                            placeholder="Por ej: caramelos"
                            className="rounded-0 rounded-start-2"
                          />
                        </Col>
                        <Col xs="auto" className='ps-0 '>
                          <Button className='rounded-0 rounded-end-circle d-flex justify-content-center h-100 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search w-100" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                          </svg></Button>
                        </Col>
                      </Row>
                    </Form>
                    <Nav>
                      <NavLink to="/nosotros" className='nav-link'>
                        Sobre Nosotros
                      </NavLink>
                      <NavLink to="/contacto" className='nav-link'>
                        Contacto
                      </NavLink>
                    </Nav>
                  </>
            }
            {
              token && role
                ?
                <Nav>
                  <NavLink className={"nav-link"} onClick={singOff}>
                    Cerrar sesion
                  </NavLink>
                </Nav>
                :
                <Nav className='ms-0 ms-md-auto'>
                  <NavLink className='nav-link' onClick={handleShow}>
                    Iniciar Sesion
                  </NavLink>
                  <NavLink className='nav-link' onClick={handleShow2}>
                    Registrarse
                  </NavLink>
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
              <Form.Control name="correo" type="email" placeholder='EJ: mail@mail.com' onChange={handleChangeI} value={formValuesI.correo} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasenia" placeholder='Contraseña' type="password" className='mb-3' onChange={handleChangeI} value={formValuesI.contrasenia} />
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
              <Form.Control name="correo" placeholder='EJ: mail@mail.com' type="email" onChange={handleChangeR} value={formValuesR.correo} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasenia" placeholder='Minimo 8 caracteres' type="password" className='mb-3' onChange={handleChangeR} value={formValuesR.contrasenia} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control name="rcontrasenia" placeholder='Repetir contraseña' type="password" className='mb-3' onChange={handleChangeR} value={formValuesR.rcontrasenia} />
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