import ResponsiveAppBar from "../components/NavBar";

const arrayOfComponents = [
  {
    id: 1,
    name: "Inicio",
  },
  {
    id: 2,
    name: "Inventario",
  },
  {
    id: 3,
    name: "Reportes",
  },
];

export const Inventario = () => {
  return (
    <div>
      <ResponsiveAppBar />

      <div>
        {arrayOfComponents.map((comp) => (
          <h1 key={comp.id}>{comp.name}</h1>
        ))}
      </div>
      <h1>Resumen De Inventario: </h1>
    </div>
  );
};
