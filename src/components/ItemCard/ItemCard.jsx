import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCard = ({id,nombre,precio,img}) => {
    return (
        <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body >
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
                <Button  variant="warning">Agregar</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;
