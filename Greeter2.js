import react from 'react'

export const Greeter2 = ({first,last,estado})=>{
    return (
        <p>
            hello,{first} tiene {lsat} años y esta {(estado)? "activo":"inactivo"} en el sistema.
        </p>
    );



}

import './App.css'
import { Greeter } from './components/greeter';

function App(){
    return(
        <div className='container'>
            <Greeter2 first="juan" last={30} estado={true}/>
            <Greeter2 first="Alicia" last={18} estado={true}/>
            <Greeter2 first="Andrea" last={25} estado={true}/>
        </div>
    );
}

export const empleado = (props)=>{
    return(
        <div>
            <p>nombre: {props.emple.nombre}</p>
            <p>Edad: {props.emple.edad}</p>
            <p>Salario:{props.emple.salario}</p>
        </div>
    )
}

import './App.css'
import{ Empleado} from './components/empleado';

const empledo={
    nombre:"Diego",
    edad:30,
    salario: 2500
}

function App(){
    return (
        <div className='constiner'>
            <empleado emple={empleado}/>
        </div>
    );
}

export default App

export const fruta = (props) => {
    const x= props.fru;
    const listItems= x.map((frutas) => <li>{frutas}</li>)

    return <ul>{listItems}</ul>;
};

import "./app.css";
import {fruta} from"./components/frutas";

const frutas = ["manzana","pera","piña"]

function App() {
    return (
        <div className="constainer">
            <Fruta fru={frutas}/>
        </div>
    );
}

