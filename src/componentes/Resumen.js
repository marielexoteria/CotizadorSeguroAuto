import React, {Component} from 'react';

//importando función del archivo /src/helper.js
import {primeraMayuscula} from '../helper';

class Resumen extends Component {
    mostrarResumen = () => { //este método mostrará el resumen si el usuario ha llenado el formulario y hecho click en el botón Cotizar
        const {marca, year, plan} = this.props.datos; //destructuring la info que el componente padre mandó al hijo por vía del state

        if (!marca || !year || !plan) return null; //para que si no se ha hecho una selección de alguno de los elementos del formulario, que con el return null se evite desplegar el resumen

        return(
            <div className = "resumen">
                <h2>Resumen de la Cotización</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </div>
        )
    }

    render() {
        
        return(
            <div>
                {this.mostrarResumen()}
            </div>
        )
    }
}

export default Resumen;