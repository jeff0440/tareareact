import React, {Component} from 'react';
import { listadoPersona } from './../services/personasServices';

class Persona extends Component {
    state = {
        datos:listadoPersona()
    };
handlerEliminar= persona =>{

const datos=this.state.datos.filter(p=>p.id!==persona.id);
this.setState({datos});
};

handlerAgregar=()=>{
    const nuevo= {id:Math.random()*9, nombre: "Alder",apellido:"Lacayo",deporte:"Fooball", municipio:"Jinotepe", estado:true};
    const datos=this.state.datos;
    datos.push(nuevo);
    this.setState({datos});
}
    
    render(){ 
        return (<div className="container">
       
        <button onClick={this.handlerAgregar} 
        className="btn btn-info">Agregar Personas</button>
        <br/>
        <div className="table-responsive"><br/>
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Identificador</th>
                 <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Deporte</th>
                  <th>Municipio</th>
                  <th>Opciones</th>
                </tr>
                <tr></tr>
              </thead>
            </table>
          </div>
        <ul className="list-group">
        {this.state.datos.map(persona=>
            <li key={persona.id}
            className="list-group-item d-flex justify-content-between align-items-left">
            <th>{persona.id}</th>
            <th>{persona.nombre}</th>
            
            <th>{persona.apellido}</th>
            
            <th>{persona.deporte} </th>    
            
            <th>{persona.municipio}</th>
            <span>
            <button 
            onClick={()=>this.handlerEliminar(persona)} 
            className="btn btn-danger btn-sm">Eliminar</button>
            {persona.estado}
            </span>
          </li>

            )}
        </ul>
        
        </div>
        )};
    }  

 
export default Persona;