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
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Button from "../components/Button/Button";

const useStyles = makeStyles(() => {
  return {
    dialogTitle: {
      paddingBottom: "0 !important",
      "& h5": {
        fontWeight: "bold",
      },
    },
    dialogActions: {
      padding: "0.5rem 1.5rem 1.5rem 1.5rem",
    },
  };
});

function UserHistory({ open, onClose }) {
  const { dialogActions, dialogTitle } = useStyles();

  const columns = [
    { id: "status", label: "Status", minWidth: 170 },
    { id: "data", label: "Data", minWidth: 100 },
    {
      id: "observacoes",
      label: "Observações",
      minWidth: 170,
      style: { flex: 15 },
    },
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
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle className={dialogTitle}>
          <Typography variant="h5">Histórico</Typography>
        </DialogTitle>
        <DialogContent>
          <TableContainer style={{ minWidth: "50rem" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={column.style}
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
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={column.style}
                            >
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
            style={{ marginRight: "1rem" }}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            labelRowsPerPage="Linhas por página:"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} linhas de ${count}`
            }
            rowsPerPageOptions={[5, 10, 25]}
          />
        </DialogContent>

        <DialogActions className={dialogActions}>
          <Button size="medium" color="secondary" onClick={onClose}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </fragment>
  );
}
export default UserHistory;
