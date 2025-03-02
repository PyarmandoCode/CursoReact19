import React from "react";
import SaludoCla from "./SaludoCla";

class AppComCla extends React.Component {
    render() {
        return (
            <div>
                <h1>Bienvenido a React 10 con Typescript</h1>
                <SaludoCla nombre="Jorge" edad={30} />
            </div>
        )
    }
}
export default AppComCla;