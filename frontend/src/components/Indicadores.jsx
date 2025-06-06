// src/components/Indicadores.jsx
import React, { useState, useEffect } from "react";

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

const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQid6sUTKOOxc314eqynJVv5ydBTFTAbXzAgbksZjY45DnDO8VR8eEx12jIAqLIpNEY5jVJeRTUoeEg/pub?output=csv";

const Indicadores = () => {
  const [activo, setActivo] = useState("dis-meta");
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(GOOGLE_SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        const rows = text.split("\n").slice(1);
        const parsed = rows.map((row) => row.split(","));
        setDatos(parsed);
      });
  }, []);

  return (
    <section id="indicadores" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Indicadores</h2>

        {/* Botones tipo slider responsive */}
        <ul className="flex overflow-x-auto whitespace-nowrap gap-4 mb-6 px-2 md:flex-wrap md:justify-center md:overflow-visible">
          {indicadoresData.map((item) => (
            <li
              key={item.id}
              className={`flex-shrink-0 cursor-pointer px-4 py-2 rounded-lg text-sm md:text-base font-semibold border ${
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

        {/* Contenido del indicador */}
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

        {/* Datos desde Google Sheets */}
        <div className="mt-8 max-w-3xl mx-auto bg-white p-4 rounded shadow">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">Datos en tiempo real (Google Sheets)</h4>
          <table className="table-auto w-full text-sm text-left">
            <tbody>
              {datos.slice(0, 5).map((fila, i) => (
                <tr key={i} className="border-b">
                  {fila.map((col, j) => (
                    <td key={j} className="py-1 px-2 border-r">{col}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Gráfico de Looker Studio */}
        <div className="mt-10">
          <h4 className="text-lg font-semibold text-blue-900 mb-2 text-center">Gráfico de desempeño</h4>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/8df7a916-522d-40d3-a681-fbd40cd3fa90/page/c9INF"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
              title="Indicadores en Looker Studio"
              className="w-full h-full"
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indicadores;
