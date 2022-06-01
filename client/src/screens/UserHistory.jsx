import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/Container";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Button from "../components/Button/Button";
import { useState } from "react";

const useStyles = makeStyles(() => {
  return {
    dialogTitle: {
      fontWeight: "bold",
    },
    dialogActions: {
      padding: "0.5rem 1.5rem 1.5rem 1.5rem",
    },
  };
});

export function UserHistory() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { dialogActions, dialogTitle } = useStyles();

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const columns = [
    { id: "status", label: "Status", minWidth: 170 },
    { id: "data", label: "Data", minWidth: 100 },
    { id: "observacoes", label: "Observações", minWidth: 170 },
    { id: "usuario", label: "Usuário", minWidth: 170 },
  ];

  function createData(status, data, observacoes, usuario) {
    return { status, data, observacoes, usuario };
  }

  const rows = [
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Tes34te", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste11", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Test34e", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Tes55te", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Teste", "07/02/2022", "teste teste teste teste", "Fulano"),
    createData("Test1e", "07/02/2022", "teste teste teste teste", "Fulano"),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <fragment className="container">
      <Button onClick={handleOpenModal}>Abrir</Button>
      <Dialog
        open={modalIsOpen}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" className={dialogTitle}>
            Histórico
          </Typography>
        </DialogTitle>
        <TableContainer sx={{ maxHeight: 20 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      top: 57,
                      minWidth: column.minWidth,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          labelRowsPerPage={""}
          rowsPerPageOptions={[]}
        />
        <DialogActions className={dialogActions}>
          <Button size="medium" color="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </fragment>
  );
}
