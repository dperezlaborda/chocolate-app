import React, {useSate} from 'react';
import './Table.scss';
import TitlesTable from './TitlesTable';

const Table = props =>{     //lo que quiero loopear
    return(
        <table>
            <TitlesTable></TitlesTable>
            <tbody>
                {props.products.map( p => {
                    return(
                    <tr>
                        <td>{p.id}</td>
                        <td>{p.marca}</td>
                        <td>{p.tipo}</td>
                        <td>${p.precio}</td>
                        <td>%{p.porcentaje}</td>
                        <td>
                            <button onClick={e => props.dltProduct(p.id)} id="dltBttn">Eliminar</button>
                        </td>
                        <td>
                            <button id="edtBttn">Editar</button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default Table;

//props.dltProduct: estoy llamando una funcion de otro lado con los props. 