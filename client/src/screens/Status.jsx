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
  Box,
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

export function Status({ open, onClose }) {
  const { dialogActions, dialogTitle } = useStyles();
  {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [observacao, setObservacao] = useState("");
    const fullWidth = useState(true);

    const methods = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        observacao: "",
      },
    });

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleCancel = () => {
      setOpen(false);
      console.log(`CANCELAR\nStatus: ${status}\nObservação:${observacao}`);
    };

    const handleSave = () => {
      setOpen(false);
      console.log(`SALVAR\nStatus: ${status}\nObservação:${observacao}`);
    };

    return (
      <Fragment>
        <Box className="content-button">
          <Button onClick={handleClickOpen}>Alterar status do processo</Button>
        </Box>

        <Dialog fullWidth={fullWidth} open={open} onClose={handleCancel}>
          <DialogTitle>
            <Typography variant="h5" className={dialogTitle}>
              Alterar status do processo
            </Typography>
          </DialogTitle>

          <DialogContent>
            <Box className="container-input" style={{ marginTop: "0.5rem" }}>
              <Box className="container-input">
                <FormControl variant="outlined" className="container-input">
                  <InputLabel>Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    label="Status"
                    placeholder="Selecione"
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
                      classname="container-input"
                      name="observacao"
                      label="Observação"
                      value={observacao}
                    />
                  </FormProvider>
                </FormControl>
              </Box>
            </Box>
          </DialogContent>

          <DialogActions className={dialogActions}>
            <Button size="medium" color="secondary" onClick={handleCancel}>
              CANCELAR
            </Button>

            <Button size="medium" color="primary" onClick={handleSave}>
              SALVAR
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
