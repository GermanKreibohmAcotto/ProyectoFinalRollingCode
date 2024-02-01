import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import '../css/Cards.css'

const CardsC = ({product, idComponent}) => {
  const [producto, setProducto] = useState()
  const {id, image, title, price} = product

  const addProdCart = () => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) || []
    const produtsLS = JSON.parse(localStorage.getItem('products')) || []

    if(cartLS.length > 0){
      const prodFilter = cartLS.filter((prod) => prod.id === id)

    if(prodFilter.length > 0){
      alert('El producto ya esta en el carrito')
    }else{
      const prodFilter =produtsLS.filter((prod) => prod.id === id)
      cartLS.push(prodFilter[0])
      localStorage.setItem('cart', JSON.stringify(cartLS))
    }

  }else{
    const prodFilter =produtsLS.filter((prod) => prod.id === id)
    localStorage.setItem('cart', JSON.stringify(prodFilter))
  }
}

const deletedFav = () => {
   const confirmDelFav = confirm('¿Estás seguro que quieres eliminar este producto de favorito? ')

   if(confirmDelFav) {
    const productFavLS = JSON.parse(localStorage.getItem('favorite')) || []
    const prodFilter = productFavLS.filter((product) => product.id !== id)
    localStorage.setItem('favorite', JSON.stringify(prodFilter))
    location.reload()
  }
}

const addProdFav = () => {
    const favLS = JSON.parse(localStorage.getItem('favorite')) || []
    const produtsLS = JSON.parse(localStorage.getItem('products')) || []

    if(favLS.length > 0){
      const prodFilter = favLS.filter((prod) => prod.id === id)

    if(prodFilter.length > 0){
      alert('El producto ya esta en el favorito')
    }else{
      const prodFilter =produtsLS.filter((prod) => prod.id === id)
      favLS.push(prodFilter[0])
      localStorage.setItem('favorite', JSON.stringify(favLS))
    }

  }else{
    const prodFilter =produtsLS.filter((prod) => prod.id === id)
    localStorage.setItem('favorite', JSON.stringify(prodFilter))
  }
}

  return (
     <Card className='card-class my-3'>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title className='title-class'>{title}</Card.Title>
        <Card.Text>
            {price}
        </Card.Text>
        {
        idComponent === 'fav' ?
        <a href={`#`} className='btn btn-outline-danger' onClick={deletedFav}>Eliminar</a>
        :
        idComponent !== 'idProductPage' ?
        <a href={`/producto/${id}`} className='btn btn-outline-success'>Ver mas</a>
        :
        <div className='d-flex'>
        <a href='#' className='btn btn-outline-danger' onClick={addProdCart}>Agregar al carrito</a>
        <a href='#' className='btn btn-outline-warning' onClick={addProdFav}>Agregar a favoritos</a>
        </div>
        }
      </Card.Body>
    </Card>
  )
}

export default CardsC
