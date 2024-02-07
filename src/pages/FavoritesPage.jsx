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
      console.log(error)
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