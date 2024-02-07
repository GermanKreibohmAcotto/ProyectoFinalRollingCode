import React, { useEffect, useState } from 'react'
import CardsC from '../components/CardsC';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clienteAxios from '../helpers/clientAxios';
import Swal from 'sweetalert2';
import ImgC from '../components/ImgC';
import ListGroup from 'react-bootstrap/ListGroup';

const HomePage = () => {
    const [products, setProducts] = useState([])
    const getAllProducts = async () => {
        try {
            const getProducts = await clienteAxios.get('/products')
            setProducts(getProducts.data.getAllProducts)
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: "Surgio algun error en la obtencion de los usuarios",
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

    return (
        <>
            <ImgC urlImage={'https://res.cloudinary.com/dqnqflduy/image/upload/v1707251741/tinywow_WhatsApp_Image_2024-02-06_at_5.30.23_PM_47109736_kc9nsx.jpg'} width={'100%'} />

            <Container fluid className='px-0'>
                <Container fluid>
                    <Row>
                        <Col xs={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='h3 text-center'>Categorias</ListGroup.Item>
                                <ListGroup.Item>Caramelos</ListGroup.Item>
                                <ListGroup.Item>Chicles</ListGroup.Item>
                                <ListGroup.Item>Gomitas</ListGroup.Item>
                                <ListGroup.Item>Pastillas</ListGroup.Item>
                                <ListGroup.Item>Chocolates</ListGroup.Item>
                                <ListGroup.Item>Bebidas</ListGroup.Item>
                                <ListGroup.Item>Veganas</ListGroup.Item>
                                <ListGroup.Item>Sin gluten</ListGroup.Item>
                                <ListGroup.Item>Sin azúcar</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={9} className='pe-0'>
                            <Container fluid className='pe-0'>
                                <Row className='w-100'>
                                    {
                                        products?.map((product) =>
                                            <Col sm={12} md={6} lg={3} key={product._id} className='mb-3'>
                                                <CardsC imagen={product.imagen} titulo={product.titulo} descripcion={product.descripcion} precio={product.precio} idProduct={product._id} />
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default HomePage