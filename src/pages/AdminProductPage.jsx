import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminProductPage = () => {
const [products, setProducts] = useState([])

const getAllProducts = async () => {
    const getProducts = await fetch('http://localhost:3002/api/products')
    const data = await getProducts.json()
    setProducts(data.getAllProducts)
}

useEffect(() => {
    getAllProducts()
}, [])

 
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>descripcion</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) =>
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.titulo}</td>
                            <td>{product.codigo}</td>
                            <td>{product.precio}</td>
                            <td>{product.descripcion}</td>
                            <td>
                                <img src={product.imagen} width={'50'}/>
                            </td>
                            <td>
                                <Button className='btn btn warning mx-3'>Modificar</Button>
                                <Button className='btn btn danger'>Eliminar</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default AdminProductPage