import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Button from "../Button";
import Select from "../../components/Select/Select";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "../TextField";

const useStyles = makeStyles((theme) => ({
  status: {
    fontSize: "12px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    display: "flex",
    textAlign: "justify",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    fontSize: "0.875rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "10px",
  },
  margin: {
    width: "100%",
    marginTop: "10px",
  },
  formControl: {
    width: "100%",
    marginTop: "10px",
  },
  container: {
    width: "100%",
    marginTop: "-5.8px",
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

const schema = yup.object({});

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
    defaultValues: {},
  });

  const { handleSubmit } = methods;

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);

  const onSubmit = (values) => dispatch();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent>
            <Grid style={{ marginBottom: "1rem" }}>
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
            </Grid>
            <Grid container spacing={1} style={{ marginBottom: "1rem" }}>
              <Grid item xs={9}>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <Select name="campo4" label="Cursos">
                      <MenuItem value="valor_1">Administração</MenuItem>
                      <MenuItem value="valor_2">Agronomia</MenuItem>
                      <MenuItem value="valor_3">
                        Arquitetura e Urbanismo
                      </MenuItem>
                      <MenuItem value="valor_4">Ciências Biológicas</MenuItem>
                      <MenuItem value="valor_5">Ciências Contábeis</MenuItem>
                      <MenuItem value="valor_6">Design Gráfico</MenuItem>
                      <MenuItem value="valor_7">Direito</MenuItem>
                      <MenuItem value="valor_8">Educação Física</MenuItem>
                      <MenuItem value="valor_9">Enfermagem</MenuItem>
                      <MenuItem value="valor_10">Enfermagem</MenuItem>
                      <MenuItem value="valor_11">Engenharia Civil</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={3}>
                    <Select name="campo4" label="Status">
                      <MenuItem value="valor1">Todos</MenuItem>
                      <MenuItem value="valor2">Em espera</MenuItem>
                      <MenuItem value="valor3">Em atendimento</MenuItem>
                      <MenuItem value="valor4">Aguardando inscrição</MenuItem>
                      <MenuItem value="valor5">Realizou inscrição</MenuItem>
                      <MenuItem value="valor6">Aguardando pagamento</MenuItem>
                      <MenuItem value="valor7">Efetuou pagamento</MenuItem>
                      <MenuItem value="valor8">Realizou a matrícula</MenuItem>
                      <MenuItem value="valor9">Não matriculado</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl className={classes.container}>
                      <TextField
                        name="data_inicial"
                        label="Data inicial"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl className={classes.container}>
                      <TextField
                        name="data_final"
                        label="Data Final"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3}>
                <FormControl>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Button
                        color="gray"
                        size="large"
                        style={{ marginRight: "50px" }}
                      >
                        LIMPAR
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button size="large" style={{ marginLeft: "50px" }}>
                        BUSCAR
                      </Button>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>

            <div className={classes.status}>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "red" }} />
                <p>Em espera</p>
              </FormControl>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "orange" }} />
                <p>Em atendimento</p>
              </FormControl>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "skyblue" }} />
                <p>Aguardando inscrição</p>
              </FormControl>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "blue" }} />
                <p>Realizou inscrição</p>
              </FormControl>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "midnightblue" }} />
                <p>Aguardando pagamento</p>
              </FormControl>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "green" }} />
                <p>Efetuou pagamento</p>
              </FormControl>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "darkgreen" }} />
                <p>Realizou matrícula</p>
              </FormControl>
              <FormControl className={classes.item}>
                <BookmarkIcon sx={{ color: "yellow" }} />
                <p>Não matriculado</p>
              </FormControl>
            </div>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
};

export default DashboardFilters;
