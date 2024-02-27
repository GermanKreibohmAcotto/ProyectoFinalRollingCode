import { useEffect, useState } from 'react';
import clienteAxios, { config } from '../helpers/clientAxios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableC from '../components/TableC';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



const CartPage = () => {
  const [preferenceId, setPreferenceId] = useState(null)
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

  const sumCart = (precioProductos) => {
    return precioProductos.reduce((total, product) => total + product.precio, 0);
  };

  const totalCart = sumCart(productsCart);

  initMercadoPago('TEST-982e60ea-f553-4d3c-acc3-62fb59e5c583', {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await clienteAxios.post("http://localhost:3002/api/create_preference",{
        title: "Carrito",
        quantity: 1,
        price: totalCart,
      });

      const { id } = response.data;
      console.log(response)
      return id;
    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
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
                  <TableC imagen={product.imagen} titulo={product.titulo} precio={`${product.precio}$`} descripcion={product.descripcion} idPage={"FavPage"} idProduct={product._id} />

                  
                </div>
              )
            }<Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
            <div>
              <span>Total ${totalCart}</span>
            </div>
            <button onClick={handleBuy}>Comprar</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartPage