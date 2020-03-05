import React, {useState} from 'react';
import './Inputs.scss';

const Inputs = ({setMarca, setTipo, setPrecio, setPorcentaje}) =>{
    return(
        <div className="input-container">
            <input onChange={e => setMarca(e.target.value)} 
                   className="padding" type="text" placeholder="Marca"></input>
            <input onChange={e => setTipo(e.target.value)}
                    className="padding" type="text" placeholder="Tipo"></input>
            <input onChange={e => setPrecio(e.target.value)}
                    className="padding" type="text" placeholder="Precio"></input>
            <input onChange={e => setPorcentaje(e.target.value)}
                    className="padding" type="text" placeholder="Porcentaje"></input>
        </div>
    )
}

export default Inputs;