import { Fragment, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Modal from "react-modal";

Modal.setAppElement("#root");

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

const schema = yup.object({
  observacao: yup.string(),
});

function Status({ open, onClose }) {
  const { dialogActions, dialogTitle } = useStyles();
  {
    const [status, setStatus] = useState("");
    const [observacao, setObservacao] = useState("");
    const fullWidth = useState(true);

    const methods = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        observacao: "",
      },
    });

    return (
      <Fragment>
        <Dialog fullWidth={fullWidth} open={open} onClose={onClose}>
          <DialogTitle>
            <Typography variant="h5" className={dialogTitle}>
              Alterar status do processo
            </Typography>
          </DialogTitle>

          <DialogContent style={{ padding: "0 1.5rem" }}>
            <FormControl
              variant="outlined"
              style={{ display: "flex", marginTop: "0.5rem" }}
            >
              <InputLabel>Status</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Status"
                placeholder="Selecione"
                fullWidth
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>

                <MenuItem value="Selecione2">
                  <em>Selecione2</em>
                </MenuItem>

                <MenuItem value="Selecione3">
                  <em>Selecione3</em>
                </MenuItem>

                <MenuItem value="Selecione4">
                  <em>Selecione4</em>
                </MenuItem>

                <MenuItem value="Selecione5">
                  <em>Selecione5</em>
                </MenuItem>
              </Select>
              <FormProvider {...methods}>
                <TextField
                  multiline
                  onChange={(e) => setObservacao(e.target.value)}
                  rows={4}
                  name="observacao"
                  fullWidth
                  label="Observação"
                  value={observacao}
                />
              </FormProvider>
            </FormControl>
          </DialogContent>

          <DialogActions className={dialogActions}>
            <Button size="medium" color="secondary" onClick={onClose}>
              CANCELAR
            </Button>

            <Button size="medium" color="primary" onClick={onClose}>
              SALVAR
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
export default Status;
