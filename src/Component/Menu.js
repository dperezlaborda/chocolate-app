import React from 'react';
import './Menu.scss';

const Menu = () =>{
    return(
        <div className="container-menu">
            <header>
                <h2>Chocolate-App</h2>
            </header>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <h2>B</h2>
                    </li>
                    <li>
                        <h2>C</h2>
                    </li>
                    <li>
                        <h2>D</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;