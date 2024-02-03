import Card from 'react-bootstrap/Card';
import '../components/css/Cards.css'
import {Link } from "react-router-dom"

const CardsC = ({imagen, titulo, descripcion, precio, idProduct}) => {

  return (
     <Card className='card-class my-3' key={idProduct}>
      <Card.Img variant="top" src={imagen}/>
      <Card.Body className='text-center'>
        <Card.Title className='title-class'>{titulo}</Card.Title>
        <Card.Text>
            {descripcion}
        </Card.Text>
        <Card.Text>
            ${precio}
        </Card.Text>
        <Link to={`/product/${idProduct}`}className='btn btn-info'>Ver mas</Link>
      </Card.Body>
    </Card>
  )
}

export default CardsC
