import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import CardsC from '../components/CardsC';

const ProductPage = () => {

  const params = useParams()
  const [product, setProduct] = useState({})

  const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data = await res.json()

    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
     <div key={product.id} className='d-flex justify-content-center'>
       <CardsC product={product} idComponent={'idProductPage'}/> 
      </div>
    </>
  )
}

export default ProductPage