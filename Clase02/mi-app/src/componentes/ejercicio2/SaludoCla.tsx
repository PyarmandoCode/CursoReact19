import { Component } from "react";

interface Props {
    nombre:string;
    edad:number;
}

//Componente de clase con props tipadas
class SaludoCla extends Component<Props> {
    render() {
        return (
            <div>
                <h1>Hola Soy {this.props.nombre}</h1>
                <p>Tengo {this.props.edad} años</p>
            </div>
        )
    };
};
export default SaludoCla;