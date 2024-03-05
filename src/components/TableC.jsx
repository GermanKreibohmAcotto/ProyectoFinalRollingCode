import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom"
import clienteAxios, { config } from '../helpers/clientAxios';
import Swal from 'sweetalert2';
import { useState } from 'react';

const TableC = ({ imagen, titulo, precio, idProduct }) => {



    const [cantidad, setCantidad] = useState(1)

    const delProdCart = async () => {

        try {
        
        const idUsuario = JSON.parse(sessionStorage.getItem('idUsuario'))
        const dataUser = await clienteAxios.get(`/users/${idUsuario}`, config)
            
            if (dataUser.status === 200) {

                const confirmDeletedProd = confirm('Estas seguro de que quieres eliminar este producto?')
                if (confirmDeletedProd) {
                    const productsCart = await clienteAxios.delete(`/carts/${idProduct}`, config)

                    if (productsCart.status === 200) {
                        Swal.fire({
                            title: "Producto eliminado correctamente!",
                            icon: "success",
                            confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
              </svg>`
                        });
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const cantidadCart = (ev) => {
        setCantidad(ev.target.value)
    }

    let resultadoN = 999999
    if(cantidad > 0 && cantidad < 1000){
    if (!cantidad) {
        const resultado = precio
        resultadoN = resultado
    } else {
        const precioN = precio.replace('$', '')
        const resultado = precioN * Number(cantidad)
        resultadoN = resultado
    }
    }else{
        Swal.fire({
            title: "Oops...",
            text: "Cantidad no valida, ingresar entre 1 y 999",
            icon: "error",
            confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
        });
    }




    return (
        <div>
            <Table responsive striped bordered hover className='w-100'>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={idProduct}>
                        <td><img src={imagen} width={"100vw"} /></td>
                        <td>{titulo}</td>
                        <td>{precio}</td>
                        <td>
                            <input type="number" value={cantidad} onChange={cantidadCart} className='w-25' min="1" pattern="^[0-9]+" minLength="1" maxLength="3"/>
                        </td>
                        <td>${resultadoN}</td>
                        <td>
                            <Link to={`#`} className='btn btn-danger' onClick={delProdCart}>Eliminar</Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableC