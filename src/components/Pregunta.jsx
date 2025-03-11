import { useFetch } from "../hooks/UseFetch";

function Pregunta() {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_API_BASE + "/pregunta/dia"
    );

  if (loading) return <div>Cargando pregunta...</div>;
  if (error) return <div></div>;

  return (
    <div className="mt-3 mb-4">
      <h2 className="font-bold text-2xl">{data.textoPregunta}</h2>
    </div>
  );
}

export default Pregunta;
