import Card from 'react-bootstrap/Card';
import '../components/css/Cards.css'
import { Link } from "react-router-dom"
import clienteAxios from '../helpers/clientAxios';
import Swal from 'sweetalert2';

const CardsC = ({ imagen, titulo, descripcion, precio, idProduct, idPage }) => {

  const deleteProdFav = async() => {
      const idUsuario = JSON.parse(sessionStorage.getItem('isUsuario'))
      const dataUser = await clienteAxios.get(`/users/${idUsuario}`)

      if(dataUser.status === 200){

        const confirmDeletedProd = confirm('Estas seguro de que quieres eliminar este producto?')

        if(confirmDeletedProd){
          const productsFav = await clienteAxios.delete(`/favs/${dataUser.data.getUser.idFav}/${idProduct}`)

        if(productsFav.status === 200){
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
  }

  return (
    <Card className='card-class my-3' key={idProduct}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body className='text-center'>
        <Card.Title className='title-class'>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          ${precio}
        </Card.Text>
        {
          idPage === "FavPage" ?
            <Link to={`#`} className='btn btn-danger' onClick={deleteProdFav}>Eliminar</Link>
            :
            <Link to={`/product/${idProduct}`} className='btn btn-info'>Ver mas</Link>
        }

      </Card.Body>
    </Card>
  )
}

export default CardsC
