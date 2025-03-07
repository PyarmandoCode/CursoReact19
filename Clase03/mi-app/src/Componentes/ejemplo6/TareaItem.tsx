import React from "react";

type Props = {
    tarea: string;
    onEliminar: () => void;
};

const TareaItem:React.FC<Props> = ({tarea, onEliminar } ) => {
 return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md w-full">
        <span className="text-lg">{tarea}</span>
        <button
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition" onClick={onEliminar}
          >
            Eliminar
        </button>
    </div>
 );
};
export default TareaItem;