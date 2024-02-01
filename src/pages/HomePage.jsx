import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsC from '../components/CardsC';

const HomePage = () => {

    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        const getProducts = await fetch('http://localhost:3002/api/products')
        const data = await getProducts.json()
        setProducts(data.getAllProducts)
    }
    useEffect(() => {
        getAllProducts()
    }, [])



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
            <div>HomePage</div>
            <Container>
                <Row>
                    {
                        products.map((product) =>
                            <Col sm={12} md={6} lg={4} key={product._id}>
                                <CardsC url={product.image} titulo={product.titulo} descripcion={product.descripcion} precio={product.precio} idProduct={product._id} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
            <FooterC />
        </>
    ) 
}

export default HomePage