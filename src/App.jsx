import viteLogo from "/vite.svg";
import "./App.css";
import Pregunta from "./components/Pregunta";
import Opciones from "./components/Opciones";

function App() {
  return (
    <div className="inline">
      <a href="https://encuesfera.vercel.app" target="_blank">
        <img src={viteLogo} alt="logo" width={"100px"} className="inline" />
      </a>
      <div className="p-1.5">
        <h1 className="mt-2 mb-2">Bienvenido a Encuesfera</h1>
        <Pregunta />
        <Opciones />
      </div>
    </div>
  );
}

export default App;
