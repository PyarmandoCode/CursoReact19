interface Props {
    nombre: string;
    edad : number;
}

//Componente Funcional que reciba props
const SaludoFunc:React.FC<Props> = ({nombre,edad}) => {
    return (
        <div>
            <h1>Hola , {nombre} !</h1>
            <p>Tienes {edad} años.</p>
        </div>
    );
};

export default SaludoFunc;