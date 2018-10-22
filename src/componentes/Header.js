import React from 'react';

const Header = props => { //para que reciba el nombre del título desde el componente padre
    return(
        <header className = "top">
            <h1>{props.titulo}</h1>
        </header>
    )
}

export default Header;