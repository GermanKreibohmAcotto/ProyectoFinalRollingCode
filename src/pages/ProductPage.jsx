import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductPage = () => {

    const params = useParams()
    const [product, setProduct] = useState({})

    const getOneProduct = async () => {
        const getProduct = await fetch(`http://localhost:3002/api/products/${params.id}`)
        const data = await getProduct.json()
        setProduct(data.getProduct)
    }

    useEffect(() => {
        getOneProduct()
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <img className='w-100' src="https://previews.123rf.com/images/stockgiu/stockgiu1809/stockgiu180904640/108050481-caramelo-sabroso-dulce-caramelo-ilustraci%C3%B3n-vectorial-textura.jpg" alt="" />
                </Col>
                <Col>
                    <p>{product.titulo}</p>
                    <p>{product.precio}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage
