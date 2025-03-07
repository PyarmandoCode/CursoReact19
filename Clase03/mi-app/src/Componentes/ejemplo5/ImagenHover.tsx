import React , {useState} from "react";

const ImagenHover : React.FC = ()=> {
    const [mensaje ,setMensaje] =useState("");
    return(
        <div>
            <img
              src="https://i.pinimg.com/originals/6e/51/c6/6e51c6f62061be61045f032f2526fb37.png" width={150}
              alt="Ejemmplo"
              className="mx-auto cursor-point rounded"
              onMouseOver={()=> setMensaje("Pasastes el Mouse")}
              onMouseOut={()=> setMensaje("")}  
            />
            <p className="mt-3 text-lg"> {mensaje}</p>

        </div>
    );
};
export default ImagenHover;