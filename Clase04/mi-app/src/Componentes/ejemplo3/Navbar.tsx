import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="mb-5 space-x-4 bg-white p-4 rounded-lg shadow-md">
            <Link to="/" className="text-blue-500 hover:underline" >Inicio</Link>
            <Link to="/about" className="text-blue-500 hover:underline" >Acerca de</Link>
            <Link to="/contact" className="text-blue-500 hover:underline" >Contacto</Link>

        </nav>
    )
}

export default Navbar;