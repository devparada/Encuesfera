import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Pregunta from "./components/Pregunta";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <a href="https://encuesfera.vercel.app" target="_blank">
        <img src={viteLogo} width={"100px"} />
      </a>
      <div>
        <h1>Bienvenido a Encuesfera</h1>
        <Pregunta />
        <div>
          <div id="respuestas">
            <button onClick={() => setCount((count) => count + 1)}>
              Respuesta - {count}
            </button>
            <button onClick={() => setCount((count) => count + 1)}>
              Respuesta 2 - {count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
