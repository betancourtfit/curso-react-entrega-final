import ItemCard from "../ItemCard/ItemCard";
import {useState, useEffect}  from 'react';
import { getDocs, collection, query, where, doc, updateDoc } from 'firebase/firestore';   
import { db } from "../../services/config.js"

const ItemList = ({ productos }) => {
    
    return (
        <div className="contenedorProductos container-fluid d-flex row row-cols-auto justify-content-around">
            {productos.map((prod) => (
                <ItemCard key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;
