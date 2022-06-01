import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Button from "../Button";
import { Box } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "../TextField";

const useStyles = makeStyles((theme) => ({
  status: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "1rem 0",
    fontSize: "12px",
    "& div + div": {
      marginLeft: "1rem",
    },
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  margin: {
    width: "100%",
    marginTop: "10px",
  },
  formControl: {
    width: "20%",
    marginTop: "10px",
  },
  container: {
    width: "20%",
    marginTop: "-5.8px",
  },
  buttons: {
    width: "20%",
    paddingLeft: 10,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Administração",
  "Agronomia",
  "Aquitetura e Urbanismo",
  "Ciências Biológicas",
  "Ciências Contábeis",
  "Design Gráfico",
  "Direito",
  "Educação Física",
  "Enfermagem",
  "Engenharia Civil",
];

const status = [
  "Todos",
  "Em espera",
  "Em atendimento",
  "Aguardando inscrição",
  "Realizou inscrição",
  "Aguardando pagamento",
  "Efetuou pagamento",
  "Realizou a matrícula",
  "Não matriculado",
];

const schema = yup.object({
  username: yup.string().required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

const DashboardFilters = () => {
  const classes = useStyles();
  const [courseName, setcourseName] = useState([]);
  const [statusName, setStatus] = useState([]);

  const handleChange = (event) => {
    setcourseName(event.target.value);
  };

  const statusChange = (event) => {
    setStatus(event.target.value);
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { clearErrors, handleSubmit, control, formState } = methods;

  const { errors } = formState;

  const clearError = useCallback(() => clearErrors("password"), [clearErrors]);

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);

  const onSubmit = (values) => dispatch();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {
            //CAMPO DE BUSCA
            <FormControl className={classes.margin}>
              <Input
                style={{ margin: 0 }}
                id="search"
                placeholder="Buscar"
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
          }
        </div>
        <div>
          {
            //SELEÇÃO DE CURSO
            <FormControl className={classes.formControl}>
              <InputLabel variant="outline" label="Cursos" id="courses-label">
                Cursos
              </InputLabel>
              <Select
                labelId="courses-label"
                id="courses-combo-box"
                multiple
                value={courseName}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={courseName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          }
          {
            //SELECIONAR STATUS
            <FormControl className={classes.formControl}>
              <InputLabel id="status-label" className={classes.font}>
                Status
              </InputLabel>
              <Select
                labelId="status-label"
                id="status-combo-box"
                multiple
                value={statusName}
                onChange={statusChange}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {status.map((statu) => (
                  <MenuItem key={statu} value={statu}>
                    <Checkbox checked={statusName.indexOf(statu) > -1} />
                    <ListItemText primary={statu} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          }
          <FormControl className={classes.container}>
            <TextField
              name="data_inicial"
              label="Data inicial"
              type="date"
              variant="standard"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
          <FormControl className={classes.container}>
            <TextField
              name="data_final"
              label="Data Final"
              type="date"
              variant="standard"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
          {
            //BOTÕES
            <FormControl className={classes.buttons}>
              <Box className="content-button">
                <Button color="gray" size="small">
                  LIMPAR
                </Button>
                <Button size="small">BUSCAR</Button>
              </Box>
            </FormControl>
          }
        </div>
        {
          //STATUS
          <div className={classes.status}>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "red" }} />
              <p>Em espera</p>
            </FormControl>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "orange" }} />
              <p>Em atendimento</p>
            </FormControl>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "skyblue" }} />
              <p>Aguardando inscrição</p>
            </FormControl>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "blue" }} />
              <p>Realizou inscrição</p>
            </FormControl>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "midnightblue" }} />
              <p>Aguardando pagamento</p>
            </FormControl>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "green" }} />
              <p>Efetuou pagamento</p>
            </FormControl>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "darkgreen" }} />
              <p>Realizou matrícula</p>
            </FormControl>
            <FormControl className={classes.item}>
              <BookmarkIcon fontSize="small" sx={{ color: "yellow" }} />
              <p>Não matriculado</p>
            </FormControl>
          </div>
        }
      </form>
    </FormProvider>
  );
};

export default DashboardFilters;
