import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Productos from "../productos/productos"
import Formulario from "../Formulario/Formulario"

const Home = () => {
    return (
        <div>
            <h2> HOME IMPORTADA</h2>
            <Productos/>
            <Formulario/>
            <h2> Home con todos mis productos</h2>
            <ItemListContainer/>
        </div>
    )
}

export default Home
