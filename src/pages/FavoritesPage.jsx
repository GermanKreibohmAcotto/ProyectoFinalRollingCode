import React, { useState } from 'react'
import CardsC from '../components/CardsC'
import { useEffect } from 'react'
import clienteAxios, { config } from '../helpers/clientAxios'

const FavoritesPage = () => {
  const [productsFav, setProductFav] = useState([])
  const getAllProductsFav = async () => {
    try {
      const idUsuario = JSON.parse(sessionStorage.getItem('idUsuario'))
      const dataUser = await clienteAxios.get(`/users/${idUsuario}`, config)

      if (dataUser.status === 200) {
        const productsFav = await clienteAxios.get(`/favs/${dataUser.data.getAOneUser.idFav}`, config)
        setProductFav(productsFav.data.products)
      }
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Hubo un error en la obtencion de tu lista de favoritos",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
  </svg>`
    });
    }
  }

  useEffect(() => {
    getAllProductsFav()
  }, [])
  return (
    <>
      <div className='container'>
        <div className="row">
          {
            productsFav?.map((product) =>
              <div className='col-12 col-med-6 col-lg-4' key={product._id}>
                <CardsC imagen={product.imagen} titulo={product.titulo} descripcion={product.descripcion} idPage={"FavPage"} idProduct={product._id} />
              </div>
            )
          }
        </div>
      </div>

    </>
  )
}

export default FavoritesPage