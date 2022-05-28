import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Box, FormHelperText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";

import PageWrapper from "../components/PageWrapper";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { loginUserAction } from "../store/actions/authenticationActions";

const useStyles = makeStyles(() => {
  return {
    errorButton: {
      color: "#f44336",
    },
  };
});

const schema = yup.object({
  username: yup.string().required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const Login = () => {
  const { errorButton } = useStyles();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

  const onSubmit = (values) => dispatch(loginUserAction({ values }));

  return (
    <PageWrapper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField name="username" label="E-mail" />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl margin="normal" variant="outlined">
                <InputLabel error={!!errors.password?.message}>
                  Senha
                </InputLabel>
                <OutlinedInput
                  type={values.showPassword ? "text" : "password"}
                  
                  onFocus={clearError}
                  {...field}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className={errors.password?.message && errorButton}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Senha"
                  error={!!errors.password?.message}
                />
                <FormHelperText error={!!errors.password?.message}>
                  {errors.password?.message}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Box className="content">
            <Box className="link">
              <Link to="/forgotPassword">Esqueceu a senha?</Link>
            </Box>

            <Button type="submit" onClick={() => clearErrors()}>
              Entrar
            </Button>
          </Box>
        </form>
      </FormProvider>
    </PageWrapper>
  );
};
