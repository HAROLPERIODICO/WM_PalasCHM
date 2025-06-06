export default function Programacion() {
  return (
    <section id="programacion" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Programación de la flota 3600</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">Turno DIURNO</h3>
            <p className="mb-4">Programación a realizar en el turno A1.</p>
            <img
              src="/logo75.png"
              alt="Programación A1"
              loading="lazy"
              className="w-24 h-auto mx-auto"
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">Turno NOCTURNO</h3>
            <p className="mb-4">Programación a realizar en el turno A2. turno nocturno de marc marc pal</p>
            <img
              src="/logo75.png"
              alt="Programación A2"
              loading="lazy"
              className="w-24 h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}