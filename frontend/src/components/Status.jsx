export default function Status() {
  return (
    <section id="status" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Status de la flota 3600</h2>

        <div className="text-center bg-white p-6 rounded-lg shadow max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold mb-2">Equipos DOWN</h3>
          <p className="mb-4">Equipos que se presentan down</p>
          <img src="/logo75.png" alt="Equipos DOWN" className="mx-auto w-24 h-auto" loading="lazy" />
          
        </div>
      </div>
    </section>
  );
}