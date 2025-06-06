// src/components/Indicadores.jsx
import React, { useState } from "react";

const indicadoresData = [
  {
    id: "dis-meta",
    titulo: "DIS - Meta Mensual",
    descripcion: "Indicador que muestra el rendimiento mensual en relación con la meta establecida.",
    imagen: "/logo75.png",
  },
  {
    id: "dis-acumulada",
    titulo: "DIS - Acumulada",
    descripcion: "Acumulado de rendimiento DIS durante el año actual.",
    imagen: "/logo75.png",
  },
  {
    id: "mtbf",
    titulo: "MTBF",
    descripcion: "Tiempo medio entre fallos de los equipos monitoreados.",
    imagen: "/logo75.png",
  },
  {
    id: "mtfs",
    titulo: "MTFS",
    descripcion: "Tiempo medio para el fallo de seguridad operacional.",
    imagen: "/logo75.png",
  },
  {
    id: "mtbs",
    titulo: "MTBS",
    descripcion: "Tiempo medio entre mantenimientos básicos.",
    imagen: "/logo75.png",
  },
  {
    id: "imprevisto",
    titulo: "Imprevistos",
    descripcion: "Eventos no programados que afectaron la operación.",
    imagen: "/logo75.png",
  },
];

const Indicadores = () => {
  const [activo, setActivo] = useState("dis-meta");

  return (
    <section id="indicadores" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Indicadores</h2>
        <ul className="flex flex-wrap justify-center gap-4 mb-6">
          {indicadoresData.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer px-4 py-2 rounded-lg text-sm md:text-base font-semibold border ${
                activo === item.id
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-blue-800 border-blue-300 hover:bg-blue-100"
              }`}
              onClick={() => setActivo(item.id)}
            >
              {item.titulo}
            </li>
          ))}
        </ul>

        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
          {indicadoresData
            .filter((item) => item.id === activo)
            .map((item) => (
              <div key={item.id} className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.titulo}</h3>
                <p className="text-gray-700 mb-4">{item.descripcion}</p>
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="mx-auto h-32 object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Indicadores;