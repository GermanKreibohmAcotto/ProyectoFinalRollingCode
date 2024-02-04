import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../helpers/clientAxios';


const AdminProductPage = () => {
    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false);
    const [productState, setProductState] = useState({})

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
        console.log(error)
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
        const updateProduct = await clienteAxios.put(`/products/${productState._id}`, productState, config)

        if (updateProduct.status === 200) {
            handleClose()
            Swal.fire({
                title: "Actualizado con exito",
                icon: "success",
            });
        }
    } catch (error) {
        console.log(error)
    }
    }

    const deleteProduct = async (idProduct) => {
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
               try {
                const deleteProduct = await clienteAxios.delete(`/products/${idProduct}`, config)
                if (deleteProduct.status === 20) {
                    Swal.fire({
                        title: "Eliminado!",
                        text: "El producto fue eliminado definitivamente",
                        icon: "success"
                    }
                    )
                };
               } catch (error) {
                console.log(error)
               }
            }
        });
    }
    return (
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

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Imagen</Form.Label>
                                                <Form.Control type="text" value={productState.imagen} onChange={handleChange} name='imagen' />
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
    )
}

export default AdminProductPage