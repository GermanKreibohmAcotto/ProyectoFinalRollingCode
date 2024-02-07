import { useEffect, useState } from 'react';
import clienteAxios, { config } from '../helpers/clientAxios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableC from '../components/TableC';

const CartPage = () => {
  const [productsCart, setProductCart] = useState([])

  const getAllProductsCart = async () => {
    try {
      const idUsuario = JSON.parse(sessionStorage.getItem('idUsuario'))
      const dataUser = await clienteAxios.get(`/users/${idUsuario}`, config)

      if (dataUser.status === 200) {
        const productsCart = await clienteAxios.get(`/carts/${dataUser.data.getAOneUser.idCart}`, config)
        setProductCart(productsCart.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProductsCart()
  }, [])
  return (
    <>
      <Container className='m-0'>
        <Row>
          <Col className='w-100'>
            {
              productsCart?.map((product) =>
                <div className='col-12' key={product._id}>
                  <TableC imagen={product.imagen} titulo={product.titulo} precio={`${product.precio}$`}descripcion={product.descripcion} idPage={"FavPage"} idProduct={product._id} />
                </div>
              )
            }
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default CartPage