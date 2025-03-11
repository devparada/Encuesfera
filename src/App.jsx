import logo from "/logo.png";
import "./App.css";
import Pregunta from "./components/Pregunta";
import Encuesta from "./components/Encuesta";

function App() {
  return (
    <div className="inline">
      <a href="https://encuesfera.vercel.app" target="_blank">
        <img src={logo} alt="logo" width={"100px"} className="inline" />
      </a>
      <div className="p-1.5">
        <h1 className="mt-2 mb-2">Bienvenido a Encuesfera</h1>
        <Pregunta />
        <Encuesta />
      </div>
    </div>
  );
}

export default App;
