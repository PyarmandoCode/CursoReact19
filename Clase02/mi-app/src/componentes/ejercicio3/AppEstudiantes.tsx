import React from "react";
import ListaEstudiantes from "./ListaEstudiantes";

const AppEstudiantes: React.FC = () =>{
    //Lista de estudiantes
    const estudiantes = [
        {id:1,nombre:"Juan", edad:20},
        {id:2,nombre:"Maria", edad:22},
        {id:3,nombre:"Carlos", edad:19},
        {id:4,nombre:"Fidel", edad:23},
    ];
    return (
        <div>
            <h1>Bienvenido a la Gestion de Estudiantes</h1>
            <ListaEstudiantes estudiantes={estudiantes} />
        </div>
    )
}

export default AppEstudiantes;