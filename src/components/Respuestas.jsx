import { useFetch } from "../hooks/UseFetch";
import { useEffect } from "react";
import { BarProgress } from "./BarProgress";
import PropTypes from "prop-types";

// Calcular el porcentaje para una opción
function calcularPorcentaje(opcionVotos, totalVotos) {
  if (totalVotos === 0) return 0;
  return Math.round((opcionVotos / totalVotos) * 100);
}

// refresh es una función de Encuesta pasada como parámetro
const Respuestas = ({ refresh }) => {
  const { data: idPregunta } = useFetch(
    import.meta.env.VITE_API_BASE + "/pregunta/dia/id",
    { withRefresh: true }
  );

  const { data: opciones, refetch: refetchOpciones } = useFetch(
    idPregunta?.idPregunta
      ? import.meta.env.VITE_API_BASE + "/respuestas/" + idPregunta.idPregunta
      : null,
    { withRefresh: true }
  );

  const { data: totalRespuestas, refetch: refetchTotal } = useFetch(
    idPregunta?.idPregunta
      ? import.meta.env.VITE_API_BASE +
          "/respuestas/" +
          idPregunta.idPregunta +
          "/contar"
      : null,
    { withRefresh: true }
  );

  // Cuando el id de la pregunta cambia, se actualiza el total de respuestas
  useEffect(() => {
    if (idPregunta?.idPregunta) {
      refetchOpciones();
      refetchTotal();
    }
  }, [refresh, idPregunta?.idPregunta, refetchTotal, refetchOpciones]);

  // Asegurarnos de que totalRespuestas tenga un valor numérico adecuado
  const totalRespuestasCount = totalRespuestas?.[0]?.totalRespuestas || 0;

  if (opciones != null) {
    return (
      <div className="space-y-4 mb-6">
        {opciones.map((opcion, indice) => {
          const porcentaje = calcularPorcentaje(
            opcion.totalRespuestas,
            totalRespuestasCount
          );
          return (
            <div
              key={`${opcion.idOpcion}-${indice}`}
              className="space-y-4 mb-6"
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-300">
                  {opcion.textoOpcion}
                </span>
                <span className="text-sm text-gray-300">{porcentaje}%</span>
              </div>
              <BarProgress value={porcentaje} />
            </div>
          );
        })}
      </div>
    );
  }
};

// Define que refresh es una función
Respuestas.propTypes = {
  refresh: PropTypes.func,
};

export default Respuestas;
