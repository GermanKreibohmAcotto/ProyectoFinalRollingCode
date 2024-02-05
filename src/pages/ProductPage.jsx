import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import FooterC from '../components/FooterC';
import clienteAxios from '../helpers/clientAxios';

const ProductPage = () => {

    const params = useParams()
    const [product, setProduct] = useState({})
    const token = JSON.parse(sessionStorage.getItem('token')) || ''


    const getOneProduct = async () => {
        try {
            const data = await clienteAxios.get(`/products/${params.id}`)
            setProduct(data.data.getProduct)
    } catch (error) {
        Swal.fire({
            title: "Oops...",
            text: "Surgio algun error en la obtencion del producto",
            icon: "error",
            confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
          });
    }
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
