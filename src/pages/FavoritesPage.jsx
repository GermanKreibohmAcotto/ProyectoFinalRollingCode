import React from 'react'
import CardsC from '../components/CardsC'

const FavoritesPage = () => {
  const favLS = JSON.parse(localStorage.getItem('favorite')) || []
   return (
    <>
      <div className='container'>
        <div className="row">
        {
         favLS.map((product) =>
         <div className='col-12 col-med-6 col-lg-4' key={product.id}>
          <CardsC product={product} idComponent={'fav'}/>
         </div> 
        )
        }
        </div>
      </div>
    </>
  )
}

export default FavoritesPage