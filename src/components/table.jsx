import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function DataTable() {
  return (
    <div style={{ height: 380, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        sx={{
          height: "100%",
          width: "100%",
          overflow: "auto",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 0 4px #ccc",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
}
