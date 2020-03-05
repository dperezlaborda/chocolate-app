import React, {useState} from 'react';
import './App.css';
import Table from './Component/Table';
import Inputs from './Component/Inputs';
import Menu from './Component/Menu';

function App() {
  const [products, setProducts] = useState([]);   //products, es para leer, y set para escribir, se modifican por el setter
  const [id, setId] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [tipo, setTipo] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  
const addProduct = () =>{
  const clon = [...products];   //se aplica destructuring adentro de una array, parecido a crear una nueva array. Clon seria una nueva array
  clon.push({                   //se pushea en la nueva array, que es clon
    id,
    marca,
    precio,
    tipo,
    porcentaje
  })                 
  setProducts(clon)             //este setter esta escribiendo lo que hay en clon 
}

const dltProduct = (id)=>{
  const rows = [...products]
  const index = rows.findIndex(product =>{
      return(
        product.id === id
      )
    }
  )
  rows.splice(index,1)
  setProducts(rows)
}

/*const edtProduct = () =>{
  const newProduct = {
    marca:newMarca,
    precio:newPrecio, 
    tipo:newTipo,
    porcentaje:newPorcentaje
  }
} */

  return (
    <div className="App">
        <Menu></Menu>
        <Table 
          products={products}
          dltProduct={dltProduct}>
        </Table>
        <Inputs
          setId={setId}
          setMarca={setMarca}    //lo que escribo aca en el set se pasa al padre (que seria state) 
          setPrecio={setPrecio}
          setTipo={setTipo}
          setPorcentaje={setPorcentaje}
        ></Inputs>
        <button onClick={addProduct} id="addBttn">Agregar</button>
    </div>
  );
}

export default App;
