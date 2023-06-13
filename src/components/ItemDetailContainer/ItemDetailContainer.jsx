import { useEffect, useState } from 'react'
import { getUnProducto } from '../../productImport';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getUnProducto(3)
            .then(res => setProducto(res))
    },[])
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
