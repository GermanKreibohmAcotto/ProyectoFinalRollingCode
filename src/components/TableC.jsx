import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom"
import clienteAxios, { config } from '../helpers/clientAxios';
import Swal from 'sweetalert2';

const TableC = ({ imagen, titulo, descripcion, precio, idProduct }) => {

    const delProdCart = async () => {
        const idUsuario = JSON.parse(sessionStorage.getItem('idUsuario'))
        const dataUser = await clienteAxios.get(`/users/${idUsuario}`, config)
        try {
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
    return (
        <div>
            <Table striped bordered hover className='w-100'>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={idProduct}>
                        <td><img src={imagen} width={"100%"} /></td>
                        <td>{titulo}</td>
                        <td>{precio}</td>
                        <td>{descripcion}</td>
                        <td>
                            <input type="number" className='w-25' />
                        </td>

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