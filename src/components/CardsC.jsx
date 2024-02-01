import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardsC = ({url, titulo, descripcion,precio, idProduct})=> {
  return (
    <Card className={'my-3'}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
         {descripcion}
        </Card.Text>
        <Card.Text>
         {precio}
        </Card.Text>
        <Link to={`/product/${idProduct}`} className='btn btn-info'>ver mas</Link>
      </Card.Body>
    </Card>
  );
}

export default CardsC;