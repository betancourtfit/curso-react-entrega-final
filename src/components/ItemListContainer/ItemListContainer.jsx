import { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query  , where } from 'firebase/firestore';   
import { db } from "../../services/config.js"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    const getProductos = () => query(collection(db,"products"));

    const getProductosPorCategoria = () => query(collection(db,"products"), where("idCat","==",idCategoria));

    useEffect( () => {

        const misProductos = idCategoria ? getProductosPorCategoria() : getProductos();

        getDocs(misProductos)
            .then(res => {
                setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch((error) => console.log("el error es", error))
        

    },[idCategoria])
    return (
        <div className = "mx-5">
            <ItemList productos= {productos} className="container-fluid d-flex" />
        </div>
    )
}

export default ItemListContainer
