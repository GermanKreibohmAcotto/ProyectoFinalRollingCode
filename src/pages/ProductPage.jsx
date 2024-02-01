import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Cardsc from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import CardsC from '../components/CardsC';

const ProductPage = () => {

    const params = useParams()

    const getOneProduct = async() => {
        const getProduct = await fetch(`http://localhost:3002/api/products/${params.id}`)
        const data = await getProduct.json()
    
    }
    
    useEffect(() =>{
        getOneProduct
    },[])

  return (
    <>
     <div key={product.id} className='d-flex justify-content-center'>
       <CardsC product={product} idComponent={'idProductPage'}/> 
      </div>
    </>
  )
}

export default ProductPage
