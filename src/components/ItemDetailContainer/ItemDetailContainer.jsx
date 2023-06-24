import { useEffect, useState } from 'react'
import { getUnProducto } from '../../productImport';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
            .catch(error => console.log(error))
    },[idItem])
    return (
        <div >
            <h2 className='text-center'>getUnProducto</h2> <br></br>
            <div className='d-flex justify-content-center'>
            {producto?.id &&<ItemDetail key={producto.id} {...producto} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer
