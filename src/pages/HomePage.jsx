import React, { useEffect, useState } from 'react'
import CardsC from '../components/CardsC';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterC from '../components/FooterC';

const HomePage = () => {

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
     <> 
            <div>HomePage</div>
            <Container>
                <Row>
                    {
                        products.map((product) =>
                            <Col sm={12} md={6} lg={4} key={product._id}>
                                <CardsC imagen={product.imagen} titulo={product.titulo} descripcion={product.descripcion} precio={product.precio} idProduct={product._id} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    ) 
}

export default HomePage