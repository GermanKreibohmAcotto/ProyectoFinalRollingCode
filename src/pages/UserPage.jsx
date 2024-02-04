import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardsC from '../components/CardsC'
import clienteAxios from '../helpers/clientAxios'

export const UserPage = () => {


  const [products, setProducts] = useState([])

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

  return (
    <>
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
export default UserPage
