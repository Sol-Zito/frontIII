import { people } from "@/data/people";
import { Container } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import React from "react";

const column: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 70,
    sortable: true,
    renderCell: (params: GridCellParams) => <>{params.value}</>,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>,
  },
  {
    field: "firstName",
    headerName: "First Name",
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>,
  },
  {
    field: "age",
    headerName: "Age",
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>,
  },
  {
    field: "house",
    headerName: "House",
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>,
  },
  {
    field: "title",
    headerName: "Title",
    minWidth: 70,
    flex: 1,
    renderCell: (params: GridCellParams) => <>{params.value}</>,
  },
];

const Table = () => {
  const pageOptions = [5, 10, 15];
  const pageSize = 5;
  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
      <DataGrid
        columns={column}
        rows={people}
        pageSizeOptions={pageOptions}
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize },
          },
        }}
      />
    </Container>
  );
};

export default Table;
