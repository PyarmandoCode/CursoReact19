import React from "react";

//Definimos la estructura de cada estudiante

interface Estudiante {
    id:number;
    nombre:string;
    edad:number;
}

//Definimos las props que recibira el componente
interface Props {
    estudiantes: Estudiante[];//Array de estudiantes
}

//Componente funcional que muestre la lista
const ListaEstudiantes:React.FC<Props> = ({estudiantes}) =>{
    return (
        <div>
            <h2>Lista de Estudiantes</h2>
            {/* Rendereizado condicional */}
            {estudiantes.length>0 ? (
                <ul>
                    {estudiantes.map((estudiante) =>(
                        <li key={estudiante.id} >
                            {estudiante.nombre} - {estudiante.edad} años
                        </li>
                    ))}
                </ul>
            ): (
                <p>No Hay Estudiantes registrados</p>
            )  
        }
        </div>
    );
};

export default ListaEstudiantes;