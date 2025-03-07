import React , { useState } from "react";


const DetectarTecla: React.FC= () => {
    const [tecla,setTecla] = useState("");
    const manejartecla = (e: React.KeyboardEvent) =>{
        setTecla(e.key)
    }
    return(
        <div className="p-5">
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Presionar una tecla"
              onKeyDown={manejartecla}
            >
            </input>
            {tecla && <p className="mt-3 text-lg">Ultima Tecla :{tecla}</p>}

        </div>
    )

}
export default DetectarTecla;