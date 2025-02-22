import { useFetch } from "../hooks/UseFetch";

function Pregunta() {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_API_BASE + "/pregunta/dia"
  );

  if (loading) return <div>Cargando datos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{data.textoPregunta}</h2>
    </div>
  );
}

export default Pregunta;
