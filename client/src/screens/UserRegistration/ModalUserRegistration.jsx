import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  MenuItem,
  Typography,
} from "@material-ui/core";

import TextField from "../../components/TextField/TextField";
import Select from "../../components/Select/Select";
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

export function ModalUserRegistration({ open, onClose }) {
  const { dialogActions, dialogTitle } = useStyles();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" className={dialogTitle}>
          Cadastro de usuários
        </Typography>
      </DialogTitle>

      <DialogContent>
        <TextField name="campo1" label="Nome completo" fullWidth />

        <TextField name="campo2" label="E-mail" fullWidth />

        <TextField type="phone" name="campo3" label="Telefone" fullWidth />

        <Select name="campo4" label="Departamento">
          <MenuItem value="">Nenhum</MenuItem>
          <MenuItem value="valor_1">Valor 1</MenuItem>
          <MenuItem value="valor_2">Valor 2</MenuItem>
          <MenuItem value="valor_3">Valor 3</MenuItem>
        </Select>
      </DialogContent>

      <DialogActions className={dialogActions}>
        <Button size="medium" color="secondary" onClick={onClose}>
          Cancelar
        </Button>

        <Button size="medium">Enviar</Button>
      </DialogActions>
    </Dialog>
  );
}
