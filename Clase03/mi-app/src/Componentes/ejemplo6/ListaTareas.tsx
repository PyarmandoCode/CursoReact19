//Administra la lista de tareas y el formulario.

import React, { useState } from "react";
import TareaItem from "./TareaItem";

const ListaTareas: React.FC = () => {
  const [tareas, setTareas] = useState<string[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea(""); // Limpiar input
    }
  };

  //Aquí es donde onEliminar realmente modifica el estado:

  const eliminarTarea = (index: number) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  //¿Qué hace onEliminar={() => eliminarTarea(index)}?
//🔹 Crea una función anónima () => eliminarTarea(index).
//🔹 Cuando el usuario presiona el botón, se llama eliminarTarea(index).
//🔹 Filtra la lista y elimina la tarea con ese índice.
//🔹 React re-renderiza la lista sin la tarea eliminada.

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Lista de Tareas ✅</h2>

      {/* Input para nueva tarea */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
          placeholder="Nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700 transition"
          onClick={agregarTarea}
        >
          Agregar
        </button>
      </div>

      {/* Mostrar tareas */}
      <div className="space-y-3">
        {tareas.length === 0 ? (
          <p className="text-gray-500 text-center">No hay tareas aún...</p>
        ) : (
          tareas.map((tarea, index) => (
            <TareaItem key={index} tarea={tarea} onEliminar={() => eliminarTarea(index)} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaTareas;
