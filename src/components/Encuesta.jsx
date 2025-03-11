import { useState } from "react";
import OpcionesBotones from "./Opciones";
import Respuestas from "./Respuestas";

const ParentComponent = () => {
  // Estado para forzar la actualización de votos
  const [refreshVotes, setRefreshVotes] = useState(true);

  // Función que se llama al votar para forzar el refresh
  const lanzarVoto = () => {
    setRefreshVotes((prev) => !prev);
  };

  return (
    <div>
      <OpcionesBotones onVoto={lanzarVoto} />
      <Respuestas refresh={refreshVotes} />
    </div>
  );
};

export default ParentComponent;
