interface BienvenidoUsuariosProps {
    name: string;
    rol:string;
}

//Componente Funcional con props tipadas

export function BienvenidoUsuario({name,rol}:BienvenidoUsuariosProps) {
    return <h2>Hola Usuario {name}, Acceso {rol}</h2>
}