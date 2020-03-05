import React from 'react';
import './TitlesTable.scss';

const TitlesTable = () =>{
    return(
            <thead>
                <tr>
                    <th className="title" id="marca-th">
                        MARCA
                    </th>
                    <th className="title" id="tipo-th">
                        TIPO
                    </th>
                    <th className="title" id="precio-th">
                        PRECIO
                    </th>
                    <th className="title" id="porcentaje-th">
                        PORCENTAJE
                    </th>
                </tr>
            </thead>
    )
}

export default TitlesTable;