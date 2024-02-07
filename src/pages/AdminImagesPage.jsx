import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../helpers/clientAxios';

export const AdminImagesPage = () => {
    const [images, setImages] = useState([]);
    const [imageState, setImageState] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newImage, setnewImage] = useState({
        titulo: '',
    })
    const [imagen, setImagen] = useState({})
    const handleChange = (ev) => {
        setnewImage({ ...newImage, [ev.target.name]: ev.target.value })
    }
    const handleChangeImg = (ev) => {
        setImagen({ ...imagen, [ev.target.name]: ev.target.files[0] })
    }

    const handleClick = async (ev) => {
        try {
            ev.preventDefault()
            const { titulo } = newImage
            if (!titulo) {
                Swal.fire({
                    title: "Oops...",
                    text: "Algun campo esta vacio",
                    icon: "error",
                    confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
              </svg>`
                });
            } else {

                const data = new FormData()
                data.append('imagen', imagen)

                const addImg = { ...newImage, data }
                const createImg = await clienteAxios.post('/images/', addImg, config)
            }
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: "Surgio algun error en la creacion de la Imagen",
                icon: "error",
                confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
          </svg>`
            });
        }
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
            <div className='d-flex justify-content-center m-3'>
                <Button variant="success" onClick={handleShow}>
                    Agregar Imagen
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar Imagenes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text" name='titulo' onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Url de imagen</Form.Label>
                                <Form.Control type="file" placeholder="tipo jpg, png o jpeg" onChange={handleChangeImg} />
                            </Form.Group>
                            <Button variant="success" type="submit" onClick={handleClick} className='w-100'>
                                Crear
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Imagen</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        images?.map((image) =>
                            <tr key={image._id} >
                                <td>{image._id}</td>
                                <td>{image.titulo}</td>
                                <td>
                                    <img src={image.imagen} width={'50'} />
                                </td>
                                <td className='text-center '>
                                    <Button className='btn btn-danger mb-1' onClick={() => deleteImage(image._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default AdminImagesPage