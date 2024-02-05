import React, { useEffect, useState } from 'react'
import CardsC from '../components/CardsC';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterC from '../components/FooterC';
import clienteAxios from '../helpers/clientAxios';

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
            <div>HomePage</div>
            <Container>
                <Row>
                    {
                        products?.map((product) =>
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