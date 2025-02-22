import viteLogo from "/vite.svg";
import "./App.css";
import Pregunta from "./components/Pregunta";
import Opciones from "./components/Opciones";

function App() {
  return (
    <div>
      <a href="https://encuesfera.vercel.app" target="_blank">
        <img src={viteLogo} width={"100px"} />
      </a>
      <div>
        <h1>Bienvenido a Encuesfera</h1>
        <Pregunta />
        <Opciones />
      </div>
    </div>
  );
}

export default App;
