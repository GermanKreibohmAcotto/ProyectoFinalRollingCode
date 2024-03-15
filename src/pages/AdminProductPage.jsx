import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../helpers/clientAxios';
import { number } from 'yup';


const AdminProductPage = () => {

    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [productState, setProductState] = useState({});

    const [newProduct, setNewProduct] = useState({
        titulo: '',
        precio: '',
        descripcion: '',
        codigo: '',
    })

    const [imagen, setImagen] = useState({})

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleChange1 = (ev) => {
        setNewProduct({ ...newProduct, [ev.target.name]: ev.target.value })
    }

    const handleChangeImg = (ev) => {
        setImagen(ev.target.files[0])
    }

    const handleClick1 = async (ev) => {
        try {
            ev.preventDefault()
            const { titulo, codigo, precio, descripcion } = newProduct
            if (!titulo || !precio || !codigo || !descripcion) {
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
                data.append('titulo', newProduct.titulo)
                data.append('codigo', newProduct.codigo)
                data.append('precio', newProduct.precio)
                data.append('descripcion', newProduct.descripcion)
                data.append('imagen', imagen)

                const createProd = await clienteAxios.post('/products', data, config)
                if (createProd) {
                    Swal.fire({
                        title: "Creado con exito",
                        icon: "success",
                    });
                    handleClose1()
                }
            }
        } catch (error) {

            Swal.fire({
                title: "Oops...",
                text: "Surgio algun error en la creacion del producto",
                icon: "error",
                confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
          </svg>`
            });
        }
    }

    const handleClose = () => setShow(false);

    const handleShow = (productData) => {
        setShow(true)
        setProductState(productData)
    }

    const getAllProducts = async () => {
        try {

            const getProducts = await clienteAxios.get('/products')
            setProducts(getProducts.data.getAllProducts)

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
        getAllProducts()
    }, [])

    const handleChange = (ev) => {
        setProductState({ ...productState, [ev.target.name]: ev.target.value })
    }
    const handleClick = async (ev) => {
        try {
            ev.preventDefault()

            const formData = new FormData()
            formData.append('titulo', productState.titulo)
            formData.append('codigo', productState.codigo)
            formData.append('precio', productState.precio)
            formData.append('descripcion', productState.descripcion)

            const updateProduct = await clienteAxios.put(`/products/${productState._id}`, formData, config)

            if (updateProduct.status === 200) {
                handleClose()
                Swal.fire({
                    title: "Actualizado con exito",
                    icon: "success",
                });
            }
        } catch (error) {
                      Swal.fire({
                title: "Oops...",
                text: "Surgio algun error en la actualizacion",
                icon: "error",
                confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
          </svg>`
            });
        }
    }

    const deleteProduct = async (idProduct) => {
        try {
            Swal.fire({
                title: "Seguro que quieres eliminarlo?",
                text: "La eliminacion sera definitiva!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar!",
                cancelButtonText: "Conservar producto!"
            }).then(async (result) => {
                if (result.isConfirmed) {

                    const deleteProduct = await clienteAxios.delete(`/products/${idProduct}`, config)
                    if (deleteProduct.status === 200) {
                        Swal.fire({
                            title: "Eliminado!",
                            text: "El producto fue eliminado definitivamente",
                            icon: "success"
                        })
                    }
                }
            });
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: "Surgio algun error en la eliminacion",
                icon: "error",
                confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
          </svg>`
            });
        }
    }




    return (
        <>
            <div className='text-center m-3'>
                <Button variant="outline-success" onClick={handleShow1}>
                    Crear nuevo producto +
                </Button>

                <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear producto nuevo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name='titulo' onChange={handleChange1} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" name='precio' onChange={handleChange1} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" name='descripcion' onChange={handleChange1} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="text" name='codigo' onChange={handleChange1} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file" onChange={handleChangeImg} />
                            </Form.Group>
                            <Button variant="success" type="submit" className='w-100' onClick={handleClick1}>
                                Crear producto!
                            </Button>

                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Nombre</th>
                        <th>ID</th>
                        <th>Precio</th>
                        <th>descripcion</th>
                        <th>Codigo</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) =>
                            <tr key={product._id} >
                                <td>{product.titulo}</td>
                                <td>{product._id}</td>
                                <td>{product.precio}</td>
                                <td>{product.descripcion}</td>
                                <td>{product.codigo}</td>
                                <td>
                                    <img src={product.imagen} width={'100'} />
                                </td>
                                <td className='text-center '>
                                    <Button className='btn btn-danger mb-1' onClick={() => deleteProduct(product._id)}>Eliminar</Button>
                                    <Button variant="warning" className='btn btn-warning mb-1' onClick={() => handleShow(product)}>
                                        Editar
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Editar Producto</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control type="text" value={productState.titulo} onChange={handleChange} name='titulo' />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Precio</Form.Label>
                                                    <Form.Control type="text" value={productState.precio} onChange={handleChange} name='precio' />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Descripcion</Form.Label>
                                                    <Form.Control type="text" value={productState.descripcion} onChange={handleChange} name='descripcion' />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Codigo</Form.Label>
                                                    <Form.Control type="text" value={productState.codigo} onChange={handleChange} name='codigo' />
                                                </Form.Group>

                                               
                                                <Button variant="primary" type="submit" onClick={handleClick}>
                                                    Guardar Cambios
                                                </Button>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default AdminProductPage
