import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";

import Button from "../../components/Button";
import TextField from "../../components/TextField";

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

function ModalCourseRegistration({ open, onClose }) {
  const { dialogActions, dialogTitle } = useStyles();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" className={dialogTitle}>
          Cadastro de cursos
        </Typography>
      </DialogTitle>

      <DialogContent>
        <TextField name="name" label="Nome do curso" fullWidth />
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

export default ModalCourseRegistration;
