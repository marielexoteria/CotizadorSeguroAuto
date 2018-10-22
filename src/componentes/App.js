import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';

//importando funciones del archivo /src/helper.js
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {
  //creando el state para desplegar el resumen de la cotización + su valor
  state = {
    resultado: '',
    datos: {}
  }


  cotizarSeguro = (datos) => { //arrow function para recibir los datos leídos (prop desde el componente hijo al padre)
    const {marca, year, plan} = datos;

    //calculando los varios pasos necesarios para desplegar el precio de la cotización del seguro
    //(1) Agregar una base de 2000 - este valor se irá reescribiendo
    let resultado = 2000;

    //(2) Obtener la diferencia de años
    const diferenciaAnio = obtenerDiferenciaAnio(year); //la variable year que se declaró en el const, línea 10

    //(3) Por cada año restar el 3% al valor actual del seguro a la base (variable resultado)
    resultado -= ((diferenciaAnio * 0.03) * resultado);

    //(4) Carros americanos = 15%, asiáticos = 5% y europeos = 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    //(5) El plan básico incrementa el valor 20% y el completo, 50%
    let incrementoPlan = obtenerPlan(plan);

    //(6) Incrementar según el plan - esto dará el total de la cotización
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2); //para que el resultado solamente despliegue 2 cifras después del punto decimal - a veces puede redondear hacia arriba

    //(7) Crear objeto para el resumen de la cotización
    const datosAuto = { //estos datos se leen del destructuring hecho en la línea 17
      marca: marca,
      year: year,
      plan: plan
    }

    //Desplegando el total de la cotización
    this.setState({
      resultado: resultado,
      datos: datosAuto
    });
  }

  render() {
    return (
      <div className="contenedor">
        <Header 
          titulo = "Cotizador de Seguro de Auto" //pasando el título del header con un prop
        /> 

        <div className="contenedor-formulario">
          <Formulario 
            cotizarSeguro = {this.cotizarSeguro} //enviando los datos leídos al componente hijo con un prop
          />
          <Resumen
            datos = {this.state.datos} //enviando la info desde el state mediante un prop
            resultado = {this.state.resultado}
          />
        </div>
      </div>
    ); 
  }
}

export default App;
