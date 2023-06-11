import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ productos }) => {
    return (
        <div className="contenedorProductos container-fluid d-flex justify-content-around">
            {productos.map((prod) => (
                <ItemCard key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;
