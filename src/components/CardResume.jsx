import "../css/Cards.css";
import BadgeIcon from "@mui/icons-material/Badge";
import RememberMeOutlinedIcon from "@mui/icons-material/RememberMeOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";

export default function Card({ data }) {
  if (!data) {
    return null;
  }

  return (
    <>
      <div className="card">
        <p
          className={[
            data.tipo === "Usuarios" ? "background color-usuario" : "",
            data.tipo === "Celulares" ? "background color-celular" : "",
            data.tipo === "Componentes" ? "background color-componente" : "",
          ].join(" ")}
        >
          {data.tipo === "Usuarios" && <BadgeIcon className="style-icon" />}
          {data.tipo === "Celulares" && (
            <RememberMeOutlinedIcon className="style-icon" />
          )}
          {data.tipo === "Componentes" && (
            <ImportantDevicesOutlinedIcon className="style-icon" />
          )}
        </p>
        <p className="texto-cantidad">
          <strong className="font-letter">{data.cantidad}</strong>

          {data.tipo === "Usuarios" && "Usuarios"}
          {data.tipo === "Celulares" && "Celulares "}
          {data.tipo === "Componentes" && "Componentes "}
        </p>
      </div>
    </>
  );
}
