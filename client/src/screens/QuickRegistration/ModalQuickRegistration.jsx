import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Select from "../../components/Select/Select";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { FormProvider, useForm } from "react-hook-form";

const useStyles = makeStyles(() => {
  return {
    dialogTitle: {
      fontWeight: "bold",
    },
    dialogActions: {
      padding: "0.5rem 1.5rem 1.5rem 1.5rem",
    },
    dialogContent: {
      display: "flex",
      flexDirection: "column",
      padding: "0px 20px",
      width: "100%",
    },
    test: {
      display: "flex",
    },
    row: {
      width: "50%",
    },
    dialog: {
      "& .MuiDialog-paper": {
        background: "#fff",
      },
    },
  };
});

function ModalQuickRegistration({ open, onClose }) {
  const { dialog, dialogActions, dialogTitle, dialogContent, row, test } =
    useStyles();
  const [course, setCourse] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");

  const methods = useForm({});

  const courseChange = (event) => {
    setCourse(event.target.value);
  };
  const stateChange = (event) => {
    setState(event.target.value);
  };
  const cityChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      className={dialog}
    >
      <DialogTitle>
        <Typography variant="h5" className={dialogTitle}>
          Cadastro rápido
        </Typography>
      </DialogTitle>

      <DialogContent className={dialogContent}>
        <FormProvider {...methods}>
          <FormControl className={dialogContent}>
            <TextField name="fullName" label="Nome completo*" />
            <TextField name="eMail" label="E-mail" />
            <box className={test}>
              <TextField
                className={row}
                name="phone"
                label="Telefone*"
                style={{ marginRight: "1rem" }}
              />
              <FormControl size="small" className={row}>
                <Select
                  labelId="course"
                  id="course"
                  value={course}
                  label="Curso*"
                  onChange={courseChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Administração</MenuItem>
                  <MenuItem value={20}>Eng. Software</MenuItem>
                  <MenuItem value={30}>Medicina</MenuItem>
                </Select>
              </FormControl>
            </box>
            <box className={test}>
              <FormControl
                style={{ marginRight: "1rem" }}
                size="small"
                className={row}
              >
                <Select
                  labelId="state"
                  id="state"
                  value={state}
                  label="Estado*"
                  onChange={stateChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Paraná</MenuItem>
                  <MenuItem value={20}>Santa Catarina</MenuItem>
                  <MenuItem value={30}>Rio Grande do Sul</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" className={row}>
                <Select
                  labelId="city"
                  id="city"
                  value={city}
                  label="Cidade*"
                  onChange={cityChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Cascavel</MenuItem>
                  <MenuItem value={20}>Toledo</MenuItem>
                  <MenuItem value={30}>Curitiba</MenuItem>
                </Select>
              </FormControl>
            </box>
            <TextField name="obs" label="Observação" multiline rows={4} />
          </FormControl>
        </FormProvider>
      </DialogContent>

      <DialogActions className={dialogActions}>
        <Button size="medium" color="secondary" onClick={onClose}>
          Fechar
        </Button>

        <Button size="medium">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
export default ModalQuickRegistration;
