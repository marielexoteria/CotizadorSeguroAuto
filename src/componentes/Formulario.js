import React, {Component} from 'react';

class Formulario extends Component {
    //refs son para leer los valores de los campos de un formulario
    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();

    cotizarSeguro = (e)  => { //arrow function para poder enlazar "this.PROPIEDAD" a este método, sino da error "undefined". Otra forma sería usar ".bind(this)" en el onSubmit pero hacerlo así implica escribir ".bind(this)" en todos los componentes. Usando el arrow function es una forma "global" de hacer lo mismo.
        e.preventDefault(); //para que el browser no ejecute el comportamiento o la acción por default. En este caso sería que la URL cambie a los campos del formulario que se seleccionaron, cuando se le da al botón de cotizar

        //leyendo el plan, puesto que se crearon 2 refs diferentes para tratar este input radio y para poder desplegar la cotización de manera precisa, se necesita saber el plan
        const plan = this.planBasicoRef.current.checked ? "basico" : "completo";
        //if plan basico is checked then give "plan" the value "basico", otherwise give "plan" the value "completo"
    
        //obtener los datos
        //console.log(this.marcaRef.current.value);

        //crear el objeto
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

        //console.log(infoAuto);

        //enviar el objeto al componente principal (App.js, usando props)
        this.props.cotizarSeguro(infoAuto);

        //reseteando el formulario (opcional)
        //e.currentTarget.reset();
    }


    render() {
        return(
            //onSubmit = action en un formulario de HTML donde normalmente se enlaza a un archivo PHP que ejecute la acción. En React con JSX se recomienda usar onSubmit con this.METODO
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}> 
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiático</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" ref={this.planBasicoRef} name="plan" value="basico"/> Básico
                    <input type="radio" ref={this.planCompletoRef} name="plan" value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default Formulario;