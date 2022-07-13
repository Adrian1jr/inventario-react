import useFetch from "../hooks/use-fetch";
import Divider from "@mui/material/Divider";
import "../css/Cards.css";

export default function ComputerCard() {
  const { data, loading, error } = useFetch(
    "https://syntranet-last-back-end-dev-mdqm7.ondigitalocean.app/api/equipoComputo/"
  );

  const usuarios = data ? data.results : [];
  const cantidadUsuarios = usuarios.length;

  return (
    <>
      <h2 className="title-section">Equipos</h2>
      <Divider className="divider" variant="middle" />

      <div className="cards">
        <div className="card">
          <p className="background-icon">1</p>
          <p className="texto-cantidad">Usuarios: {cantidadUsuarios}</p>
        </div>
      </div>
    </>
  );
}
