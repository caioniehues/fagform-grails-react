import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Button from "../Button";
import { Box } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const useStyles = makeStyles((theme) => ({
  status: {
    fontSize: '12px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    display: 'flex',
    textAlign: 'justify',
    flexDirection: 'row',
    width: '100%',
  },
  item: {
    fontSize: 'small',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px',
  },
  margin: {
    width: '100%',
    marginTop: '10px',
  },
  formControl: {
    width: '20%',
    marginTop: '10px',
  },
  buttons: {
    width: '20%',
    paddingLeft: 10,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
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
  'Administração',
  'Agronomia',
  'Aquitetura e Urbanismo',
  'Ciências Biológicas',
  'Ciências Contábeis',
  'Design Gráfico',
  'Direito',
  'Educação Física',
  'Enfermagem',
  'Engenharia Civil',
];

const status = [
  'Todos',
  'Em espera',
  'Em atendimento',
  'Aguardando inscrição',
  'Realizou inscrição',
  'Aguardando pagamento',
  'Efetuou pagamento',
  'Realizou a matrícula',
  'Não matriculado',
];

const DashboardFilters = () => {
  const classes = useStyles();
  const [courseName, setcourseName] = React.useState([]);
  const [statusName, setStatus] = React.useState([]);

  const handleChange = (event) => {
    setcourseName(event.target.value);
  };

  const statusChange = (event) => {
    setStatus(event.target.value);
  };

  const [selectedStartDate, setStartSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const startDateChange = (date) => {
    setStartSelectedDate(date);
  };

  const [selectedEndDate, setEndSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const endDateChange = (date) => {
    setEndSelectedDate(date);
  };
  return (
    <Box>
      <div>
        {//CAMPO DE BUSCA
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
          </FormControl>}
      </div>
      <div>
        {//SELEÇÃO DE CURSO
          <FormControl className={classes.formControl}>
            <InputLabel variant="outline" label="Cursos" id="courses-label">Cursos</InputLabel>
            <Select
              labelId="courses-label"
              id="courses-combo-box"
              multiple
              value={courseName}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={courseName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>}
        {//SELECIONAR STATUS
          <FormControl className={classes.formControl}>
            <InputLabel id="status-label" className={classes.font}>Status</InputLabel>
            <Select
              labelId="status-label"
              id="status-combo-box"
              multiple
              value={statusName}
              onChange={statusChange}
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {status.map((statu) => (
                <MenuItem key={statu} value={statu}>
                  <Checkbox checked={statusName.indexOf(statu) > -1} />
                  <ListItemText primary={statu} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>}
        {/* SELECIONAR DATAS - NÃO FUNCIONANDO!!
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                id="date-picker-start"
                label="Data inicial"
                value={selectedStartDate}
                onChange={startDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                id="date-picker-end"
                label="Data final"
                value={selectedEndDate}
                onChange={endDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </FormControl>*/}
        {//BOTÕES
          <FormControl className={classes.buttons}>
            <Box className="content-button">
              <Button color="gray" size='small'>
                LIMPAR
              </Button>
              <Button size='small'>BUSCAR</Button>
            </Box>
          </FormControl>}
      </div>
      {//STATUS
        <div className={classes.status}>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'red' }} />
            <p>Em espera</p>
          </FormControl>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'orange' }} />
            <p>Em atendimento</p>
          </FormControl>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'skyblue' }} />
            <p>Aguardando inscrição</p>
          </FormControl>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'blue' }} />
            <p>Realizou inscrição</p>
          </FormControl>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'midnightblue' }} />
            <p>Aguardando pagamento</p>
          </FormControl>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'green' }} />
            <p>Efetuou pagamento</p>
          </FormControl>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'darkgreen' }} />
            <p>Realizou matrícula</p>
          </FormControl>
          <FormControl className={classes.item}>
            <BookmarkIcon fontSize="small" sx={{ color: 'yellow' }} />
            <p>Não matriculado</p>
          </FormControl>
        </div>
      }
    </Box >
  );
};

export default DashboardFilters;