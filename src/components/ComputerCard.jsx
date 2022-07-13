import useFetch from "../hooks/use-fetch";
import Divider from "@mui/material/Divider";
import "../css/Cards.css";

export default function ComputerCard() {
  const { data, loading, error } = useFetch(
    "https://syntranet-last-back-end-dev-mdqm7.ondigitalocean.app/api/equipoComputo/"
  );

  const results = data ? data.results : [];

  return (
    <>
      <h2 className="title-section">Equipos</h2>
      <Divider className="divider" variant="middle" />

      <div className="cards">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          results.map((result) => (
            <div className="card" key={result.uid}>
              <p>
                Usuario: <strong>{result.usuario}</strong>
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
