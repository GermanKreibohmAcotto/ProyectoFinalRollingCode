import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardsC from '../components/CardsC'

export const UserPage = () => {


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
      <Container>
                <Row>
                    {
                        products.map((product) =>
                            <Col sm={12} md={6} lg={4} key={product._id}>
                                <CardsC url={product.image} titulo={product.titulo} descripcion={product.descripcion} precio={product.precio} idProduct={product._id} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
            </>
  )
}
export default UserPage
