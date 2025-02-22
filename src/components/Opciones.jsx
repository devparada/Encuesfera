import axios from "axios";
import { useFetch } from "../hooks/UseFetch";

function OpcionesBotones() {
  const { data: idPregunta } = useFetch(
    import.meta.env.VITE_API_BASE + "/pregunta/dia/id"
  );

  // Comprueba si el id de la pregunta es null y si lo es se cambia por un valor
  const preguntaId = idPregunta?.idPregunta || 1;
  const { data: opciones } = useFetch(
    import.meta.env.VITE_API_BASE + "/opciones/" + preguntaId
  );

  // Obtiene la IP al hacer una petición GET a esta URL
  async function obtenerIP() {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Error al obtener la IP del cliente:", error);
      return null;
    }
  }

  // Envia la opción al backend para guardarla
  async function enviarOpcion(option) {
    try {
      const clientIp = await obtenerIP();
      if (!idPregunta || !idPregunta.idPregunta) return;

      await axios.post(
        import.meta.env.VITE_API_BASE + "/enviarOpcion",
        { option, ip: clientIp, idPregunta: idPregunta.idPregunta },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Opción guardada correctamente");
    } catch (error) {
      console.error("Error al guardar la opción:", error);
    }
  }

  return (
    <div>
      <h2>Elige una opción:</h2>
      {opciones?.length > 0 ? (
        opciones.map((opcion) => (
          <button
            key={opcion.idOpcion}
            onClick={() => enviarOpcion(opcion.idOpcion)}
          >
            {opcion.textoOpcion}
          </button>
        ))
      ) : (
        <p>Cargando opciones...</p>
      )}
    </div>
  );
}

export default OpcionesBotones;
