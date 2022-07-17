import CardResume from "../components/CardResume";
import DataTable from "../components/Table";
import ResponsiveAppBar from "../components/NavBar";
import useFetch from "../hooks/use-fetch";
import Divider from "@mui/material/Divider";
import "../css/inventario.css";

export const Inventario = () => {
  const { data } = useFetch(
    "https://syntranet-last-back-end-dev-mdqm7.ondigitalocean.app/api/equipoComputo/"
  );

  const { data: data2 } = useFetch(
    "https://syntranet-last-back-end-dev-mdqm7.ondigitalocean.app/api/equipoCelular/"
  );

  const { data: data3 } = useFetch(
    "https://syntranet-last-back-end-dev-mdqm7.ondigitalocean.app/api/componente/"
  );

  const usuarios = data ? data.results : [];
  const celulares = data2 ? data2.results : [];
  const componentes = data3 ? data3.results : [];

  const cantidadUsuarios = {
    tipo: "Usuarios",
    cantidad: usuarios.length,
  };

  const cantidadCelulares = {
    tipo: "Celulares",
    cantidad: celulares.length,
  };

  const cantidadComponentes = {
    tipo: "Componentes",
    cantidad: componentes.length,
  };

  return (
    <>
      <ResponsiveAppBar />
      <h2 className="title-section">Resumen</h2>
      <Divider className="divider" variant="middle" />
      <section className="container-cards">
        <CardResume data={cantidadUsuarios} />
        <CardResume data={cantidadCelulares} />
        <CardResume data={cantidadComponentes} />
      </section>
      <section className="container-table">
        <DataTable data={componentes} />
      </section>
    </>
  );
};
