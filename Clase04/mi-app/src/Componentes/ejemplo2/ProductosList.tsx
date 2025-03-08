import { useEffect , useState } from "react";

interface Producto {
    id:number;
    nombre:string;
    precio:number;
}

const API_URL ="http://localhost:5000/productos";

const ProductosList: React.FC = () =>{
    const [productos,setProductos] = useState<Producto[]>([]);
    const [nombre ,setNombre] = useState("");
    const [precio , setPrecio] = useState("");

    useEffect(() =>{
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setProductos(data))
        .catch((error)=> console.error("Error",error))
    },[]);
    const agregarProducto = async () => {
        const nuevoProducto = {nombre,precio:Number(precio)};
        const res = await fetch(API_URL, {
            method:"POST",
            headers :  { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoProducto),
        });
    if(res.ok) {
        const productoAgregado = await res.json();
        setProductos([...productos,productoAgregado])
      }
  };
  return (
    <div className="max-w-xl mx-auto p-4" >
        <h1 className="text-2xl font-bold text-center mb-4">Lista de Productos</h1>
        {/* Formulario para agregar Productos*/}
        <div className="mb-4">
            <input
             type="text"
             placeholder="Nombre del Producto"
             value= {nombre}
             onChange={(e) => setNombre(e.target.value)}
             className="border p-2 mr-2"
            />

            <input
             type="number"
             placeholder="Precio del Producto"
             value= {precio}
             onChange={(e) => setPrecio(e.target.value)}
             className="border p-2 mr-2"
            />
            
            <button
                    onClick={agregarProducto}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Agregar
            </button>
            {/* Lista de Productos*/}
            <ul>
                {productos.map((producto) =>(
                    <li key={producto.id} className="border p-2 mb-2">
                        {producto.nombre} -$ {producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};
export default ProductosList;