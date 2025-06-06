import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Indicadores from "./components/Indicadores.jsx";

import Programacion from "./components/Programacion.jsx";
import Status from "./components/Status.jsx";


function App() {
  return (
    <>
    {/* Aquí irán las demás secciones */}
      <Header />
      <Footer />
      <Indicadores />
   
      <Programacion />
      <Status />
      {/* Puedes agregar más componentes aquí */}
  
      
    </>
  );
}

export default App;
