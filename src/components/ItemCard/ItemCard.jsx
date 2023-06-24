import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const ItemCard = ({id,nombre,precio,img}) => {
    const [contador, setContador] = useState(0)
    const [carrito, setCarrito] = useState([])

    const aumentarContador = () => {
        if(contador < 5){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if(contador > 0) {
            setContador(contador -1)
        }
    }

    useEffect(() => {
        const idProducto = document.getElementById(id).id;
    setCarrito([
      ...carrito,
      {
        id: idProducto,
        cantidad: contador
      }
    ])},[contador]
     

    )
    return (
        <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body id={id}>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
                <Button onClick={disminuirContador} variant="warning">-</Button>
                {
                contador === 0 ? 
                <Button onClick={aumentarContador} variant="warning">Agregar</Button> : <strong> {contador} </strong>
                }
                <Button onClick={aumentarContador} variant="warning">+</Button>
                <br></br>
                <Button className='align-self-center' variant="warning">
                <Link to={`/item/${id}`}>Ver más</Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;
