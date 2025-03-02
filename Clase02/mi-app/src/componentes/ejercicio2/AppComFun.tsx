import React from "react";
//Importando el componente
import SaludoFunc  from "./SaludoFunc";

const AppComFun:React.FC= () =>{
    return (
        <div>
            <h1>Bienvenido a React 19 con Typescript</h1>
            <SaludoFunc nombre="Carlos" edad = {30}/>
        </div>
    );
};
export default AppComFun;

