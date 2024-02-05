import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import clienteAxios from '../helpers/clientAxios';

const CartPage = () => {
  const [productsCart, setProductCart] = useState([])

  const getAllProductsCart = async () => {
    try {
      const idUsuario = JSON.parse(sessionStorage.getItem('isUsuario'))
      const dataUser = await clienteAxios.get(`/users/${idUsuario}`)

      if(dataUser.status === 200){
        const productsCart = await clienteAxios.get(`/carts/${dataUser.data.getUser.idCart}`)
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            productsCart.map((product) =>
              <tr key={product._id}>
                <td>{product.titulo}</td>
                <td>{product.precio}</td>
                <td>{product.descripcion}</td>
                <td>
                  <input type="number" className='w-25' />
                </td>
                <td>

                </td>
                <td>
                  <button className='btn btn-outline-danger' onClick={() => delProdCart(product.id)}>Eliminar</button><button className='btn btn-outline-success m-5'>Pagar</button>
                </td>
              </tr>
            )
          }
        </tbody>
        
      </Table>
    </>
  )
}

export default CartPage