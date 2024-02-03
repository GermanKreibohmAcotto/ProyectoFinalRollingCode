import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import FooterC from '../components/FooterC';

const ProductPage = () => {

    const params = useParams()
    const [product, setProduct] = useState({})
    const token = JSON.parse(sessionStorage.getItem('token')) || ''


    const getOneProduct = async () => {
        const getProduct = await fetch(`http://localhost:3002/api/products/${params.id}`)
        const data = await getProduct.json()
        setProduct(data.getProduct)
    }

    const addProdCart = () => {
        if (!token) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes iniciar sesion para continuar",
            });
        } else {
            Swal.fire({
                title: "Producto agregado con exito",
                text: "Ahora puedes visualizar este producto en tu carrito!",
                icon: "success",
            });
        }
    }
    const addProdFav = () => {
        if (!token) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes iniciar sesion para continuar",
            });
        } else {
            Swal.fire({
                title: "Producto agregado con exito",
                text: "Ahora puedes visualizar este producto en tu lista de favoritos!",
                icon: "success",
            });
        }
    }

    useEffect(() => {
        getOneProduct()
    }, [])

    return (
       <>
        <Container className='d-flex justify-content-center my-3'>
            <Row >
                <Col sm={12} md={6}  className='text-center'>
                    <img className='w-50' src={product.imagen} alt="" />
                </Col>
                <Col sm={12} md={6}  className='text-center mt-5'>
                   
                    <p>{product.titulo}</p>
                        <p>{product.descripcion}</p>
                        <p>${product.precio}</p>
                   
                        <Button variant="success" className="mx-2" onClick={addProdCart}>Añadir al carrito</Button>
                        <Button variant="danger" onClick={addProdFav}>Añadir a favoritos</Button>
                  
                </Col>
            </Row>
        </Container>
        <FooterC/>
        </>
    )
}

export default ProductPage
