import { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../../productImport'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();


    useEffect( () => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
        
        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
        /*getProductos()
            .then(respuesta => setProductos(respuesta))*/
    },[idCategoria])
    return (
        <div>
            <ItemList productos= {productos} className="containe-fluid" />
        </div>
    )
}

export default ItemListContainer
