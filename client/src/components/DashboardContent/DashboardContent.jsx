import { Fragment, useState } from "react";
import { makeStyles, TableSortLabel, TablePagination } from "@material-ui/core";
import exampleData from "./exampleData.json";
import DashboardFilters from "../DashboardFilters";

import FlagIcon from "@material-ui/icons/Flag";
import MoreVert from "@material-ui/icons/MoreVert";
import Restore from "@material-ui/icons/Restore";
import AttatchFile from "@material-ui/icons/AttachFile";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles(() => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "60rem",
      width: "100%",
      margin: "0 auto",
      height: "100%",
      padding: "0 2rem",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
  };
});

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

function DashboardContent() {
  const { container, content } = useStyles();
  const [data, setData] = useState(exampleData); // alterar p/ retorno da API
  const [order, setOrder] = useState("ASC");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // valor padrão

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, exampleData.length - page * rowsPerPage);

  return (
    <div className={container}>
      <DashboardFilters />
      <div className={content}>
        <MaUTable>
          <TableHead>
            {/* estilo provisório */}
            <TableCell />
            <TableCell />
            <TableCell
              onClick={() => sorting("data")}
              style={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              <TableSortLabel>Data</TableSortLabel>
            </TableCell>
            <TableCell
              onClick={() => sorting("curso")}
              style={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              <TableSortLabel>Curso</TableSortLabel>
            </TableCell>
            <TableCell
              onClick={() => sorting("nome_completo")}
              style={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              <TableSortLabel>Nome Completo</TableSortLabel>
            </TableCell>
            <TableCell
              onClick={() => sorting("cidade")}
              style={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              <TableSortLabel>Cidade</TableSortLabel>
            </TableCell>
            <TableCell
              onClick={() => sorting("telefone")}
              style={{ fontWeight: "bold", fontSize: "1rem" }}
            >
              <TableSortLabel>Telefone</TableSortLabel>
            </TableCell>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((d, index) => (
                <ExpandableTableRow
                  key={d.id}
                  expandComponent={
                    <Fragment>
                      <TableCell colSpan="3">Historico: {d.historico}</TableCell>
                      <TableCell colSpan="3">Email: {d.email}</TableCell>
                      <TableCell colSpan="3">Estado: {d.estado}</TableCell>
                      <TableCell colSpan="3">Observacao: {d.observacao}</TableCell>
                    </Fragment>
                  }
                >
                  <Fragment>
                    <FlagIcon style={{cursor:"Pointer"}} onClick={() => console.log("FlagIcon")} />
                    <Restore style={{cursor:"Pointer"}} onClick={() => console.log("Restore")} />
                    <AttatchFile style={{cursor:"Pointer"}} onClick={() => console.log("AttatchFile")} />
                  </Fragment>
                  <TableCell component="th" scope="row">
                    {d.data}
                  </TableCell>
                  <TableCell>{d.curso}</TableCell>
                  <TableCell>{d.nome_completo}</TableCell>
                  <TableCell>{d.cidade}</TableCell>
                  <TableCell>{d.telefone}</TableCell>
                  <MoreVert style={{cursor:"Pointer"}} onClick={() => console.log("MoreVert")} />
                </ExpandableTableRow>
              ))}
          </TableBody>
        </MaUTable>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={exampleData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          // labelRowsPerPage={"Linhas por página:"}
          // labelDisplayedRows={({ from, to, count }) =>
          //   `Mostrando linhas ${from}-${to} em um total de ${count}.`
          // }
        />
      </div>
    </div>
  );
}

export default DashboardContent;
