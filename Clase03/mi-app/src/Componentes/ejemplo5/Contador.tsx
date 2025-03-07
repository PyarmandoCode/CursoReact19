import React, { useState } from "react";

const Contador: React.FC = () =>{
    const [contador ,setContador] = useState<number>(0);
    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-2xl font-bold mb-4">Contador  {contador}</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setContador(contador +1)}
            >
                Incrementar
            </button>

        </div>
    );
};
export default Contador;