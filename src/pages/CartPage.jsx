import Table from 'react-bootstrap/Table';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />

const CartPage = () => {
  const cartLS = JSON.parse(localStorage.getItem('cart')) || [] 

  const delProdCart = (idProd) => {
    const confirmDelProdCart = confirm('¿Estas seguro de eliminar?')

    if(confirmDelProdCart) {
      const prodFilterCart = cartLS.filter((product) => product.id !== idProd)
      localStorage.setItem ('cart', JSON.stringify(prodFilterCart))
      location.reload
    }
  }

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
       {
         cartLS.map((product) => 
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <input type="number" className='w-25' />
            </td>
            <td>

            </td>
            <td>
              <button className='btn btn-outline-danger' onClick={() => delProdCart(product.id)}>Eliminar</button>
            </td>
          </tr>
        )
       }
      </tbody>
      <button className='btn btn-outline-success m-5'>Pagar</button> 
      <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
    </Table>
    </>
  )  
}

export default <CartPage></CartPage>