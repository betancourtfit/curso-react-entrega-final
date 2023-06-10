import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../productImport'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        getProductos()
            .then(respuesta => setProductos(respuesta))
    },[])
    return (
        <div>
            <h2>Productos TaDa</h2>
            <ItemList productos= {productos}/>
        </div>
    )
}

export default ItemListContainer
