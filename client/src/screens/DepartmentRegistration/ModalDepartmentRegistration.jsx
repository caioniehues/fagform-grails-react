import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";

import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";

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

export function ModalDepartmentRegistration({ open, onClose }) {
  const { dialogActions, dialogTitle } = useStyles();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" className={dialogTitle}>
          Cadastro de Departamentos
        </Typography>
      </DialogTitle>

      <DialogContent>
        <TextField name="campo1" label="Departamento" fullWidth />

        <TextField name="campo2" label="Formulários" fullWidth />
      </DialogContent>

      <DialogActions className={dialogActions}>
        <Button size="medium" color="secondary" onClick={onClose}>
          Fechar
        </Button>

        <Button size="medium">Enviar</Button>
      </DialogActions>
    </Dialog>
  );
}
