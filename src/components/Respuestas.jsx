import { useFetch } from "../hooks/UseFetch";
import { BarProgress } from "./BarProgress";

// Calcular el porcentaje para una opción
function calcularPorcentaje(opcionVotos, totalVotos) {
  if (totalVotos === 0) return 0;
  return Math.round((opcionVotos / totalVotos) * 100);
}

const Respuestas = () => {
  const { data: idPregunta } = useFetch(
    import.meta.env.VITE_API_BASE + "/pregunta/dia/id",
  );

  const { data: opciones } = useFetch(
    idPregunta?.idPregunta
      ? import.meta.env.VITE_API_BASE + "/respuestas/" + idPregunta.idPregunta
      : null,
  );

  const { data: totalRespuestas } = useFetch(
    idPregunta?.idPregunta
      ? import.meta.env.VITE_API_BASE +
          "/respuestas/" +
          idPregunta.idPregunta +
          "/contar"
      : null
  );

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
            <div key={`${opcion.idOpcion}-${indice}`} className="space-y-4 mb-6">
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

export default Respuestas;
