import { useEffect, useState } from 'react';
import clienteAxios, { config } from '../helpers/clientAxios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableC from '../components/TableC';
import Button from 'react-bootstrap/Button';

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
      Swal.fire({
        title: "Oops...",
        text: "Hubo un error en la obtencion del carrito",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
  </svg>`
    });
    }
  }

  useEffect(() => {
    getAllProductsCart()
  }, [])
  return (
    <>
      <Container fluid className='m-0'>
        <Row>
          <Col xs={12}>
            {
              productsCart?.map((product) =>
                <div key={product._id}>
                  <TableC imagen={product.imagen} titulo={product.titulo} precio={`$${product.precio}`} idPage={"FavPage"} idProduct={product._id} />
                </div>
              )
            }
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Button variant="success">Pagar total!</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartPage