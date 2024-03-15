import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

const initialValues = {
    nombre: "",
    correo: "",
    mensaje: ""
}

const validationSchema = Yup.object({
    nombre: Yup.string().max(30, "Superaste la cantidad de caracteres").required("Campo requerido"),
    correo: Yup.string().email("Correo no valido").max(256, "Superaste la cantidad de caracteres").required("Campo requerido"),
    mensaje: Yup.string().max(280, "Superaste la cantidad de caracteres").required("Campo requerido")
})

const contactPage = () => {
    
    const refForm = useRef()
    const onSubmit = () => {
        const serviceId = "service_erbrlnj"
        const templateId = "template_gjt8zq2"
        const apikey = "z89ogi_VH85JYCCJ_"
        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error))
        if (emailjs.sendForm) {
            Swal.fire({
                title: "Se mando su consulta con exito!",
                icon: "success",
              });
        }
    }
    const { handleChange, errors, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <main>
            <Container fluid className='mt-3'>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="text-bg-primary p-3 h-100 d-flex flex-column justify-content-center py-5 py-md-3">
                            <div className="d-flex justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7em" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16">
                                    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z" />
                                </svg>
                            </div>
                            <h1 className="text-center mb-md-5">Contactanos!</h1>
                            <div className="d-flex justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" fill="currentColor" className="bi bi-instagram mx-4" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <Container className="p-md-4 mt-3 mt-md-0">
                            <Row>
                                <form ref={refForm} onSubmit={handleSubmit}>
                                    <Col sm={12} className="mb-2"><label className="h4">Nombre</label>
                                        <input className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" type="text" name="nombre" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.nombre}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Correo Electronico</label>
                                        <input type="email" name="correo" className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.correo}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Mensaje</label>
                                        <textarea name="mensaje" className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" rows={"7"} onChange={handleChange} />
                                        <small className='text-danger'>{errors?.mensaje}</small>
                                    </Col>
                                    <div className="d-flex justify-content-end">
                                        <Col sm={12} md={3} ><Button variant="primary" type="submit" className="w-100">
                                            Enviar
                                        </Button></Col>
                                    </div>
                                </form>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default contactPage