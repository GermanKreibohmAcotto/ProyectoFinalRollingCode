import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsC from '../components/CardsC';

const HomePage = () => {

    const [estado, setEstado] = useState([])

    const getProducts = async() => {
        const produtsLS = JSON.parse(localStorage.getItem('products')) || []
        if(produtsLS.length > 0){
          setEstado(produtsLS)
        }else{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        localStorage.setItem('products', JSON.stringify(data))
        setEstado(data)
      }
    }

    

    useEffect(() => {
      getProducts()
    }, [])
    
     return (
    <>
      <div className='container'>
       <div className='row '>
         {
          estado.map((product) => 
           <div className='col-3' key={product.id}>
            <CardsC product={product}/>
           </div>
          )
         }
       </div>
      </div>
    </>
    ) 
}

export default HomePage