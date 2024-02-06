import React, { useState } from 'react'
import CardsC from '../components/CardsC'
import { useEffect } from 'react'

const FavoritesPage = () => {
  const [productsFav, setProductFav] = useState([])

  const getAllProductsFav = async () => {
    try {
      const idUsuario = JSON.parse(sessionStorage.getItem('idUsuario'))
      const dataUser = await clienteAxios.get(`/users/${idUsuario}`)

      if(dataUser.status === 200){
        const productsFav = await clienteAxios.get(`/favs/${dataUser.data.getUser.idFav}`)
        setProductFav(productsFav.data.favorites)
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
         productsFav.map((product) =>
         <div className='col-12 col-med-6 col-lg-4' key={product.id}>
          <CardsC imagen={product.imagen} titulo={product.titulo} descripcion={precio} idPage={"FavPage"} idProduct={product._id} key={product._id}/>
         </div> 
        )
        }
        </div>
      </div>
    </>
  )
}

export default FavoritesPage