import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Box, FormHelperText, makeStyles, Typography } from "@material-ui/core";
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
import Button from "../components/Button";
import { changePasswordUserAction } from "../store/actions/authenticationActions";

const useStyles = makeStyles(() => {
  return {
    errorButton: {
      color: "#f44336",
    },
  };
});

const schema = yup.object({
  newPassword: yup.string().required("Campo obrigatório"),
  newPasswordConfirmation: yup.string().required("Campo obrigatório"),
});

export const ChangePassword = () => {
  const { errorButton } = useStyles();

  const [values, setValues] = useState({
    newPassword: "",
    showNewPassword: false,
    newPasswordConfirmation: "",
    showNewPasswordConfirmation: false,
  });

  const handleClickShowPassword = (nomeCampo) => {
    if (nomeCampo === "newPassword") {
      setValues({ ...values, showNewPassword: !values.showNewPassword });
    } else {
      setValues({
        ...values,
        showNewPasswordConfirmation: !values.showNewPasswordConfirmation,
      });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      newPassword: "",
      newPasswordConfirmation: "",
    },
  });

  const { clearErrors, handleSubmit, control, formState } = methods;

  const { errors } = formState;

  const clearError = useCallback(() => clearErrors("password"), [clearErrors]);

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    let newPassword = values.newPassword;
    let newPasswordConfirmation = values.newPasswordConfirmation;
    if (newPassword !== newPasswordConfirmation) {
      console.log("Passwords dont match");
      // adicionar erro visivel na tela
      // ADICIONAR erro visivel na tela
      // ADICIONAR ERRO visivel na tela
      // ADICIONAR ERRO VISIVEL na tela
      // ADICIONAR ERRO VISIVEL NA tela
      // ADICIONAR ERRO VISIVEL NA TELA
      // ADICIONAR ERRO VISIVEL NA TELAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    } else {
      console.log("Passwords match");
      dispatch(changePasswordUserAction({ values }));
    }
  };

  return (
    <PageWrapper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography style={{ color: "gray" }} variant="h6">
            Favor, informar sua nova senha:
          </Typography>

          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <FormControl margin="normal" variant="outlined">
                <InputLabel error={!!errors.newPassword?.message}>
                  Senha
                </InputLabel>
                <OutlinedInput
                  type={values.showNewPassword ? "text" : "password"}
                  onFocus={clearError}
                  {...field}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className={errors.newPassword?.message && errorButton}
                        onClick={() => handleClickShowPassword("newPassword")}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showNewPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Nova senha"
                  error={!!errors.newPassword?.message}
                />
                <FormHelperText error={!!errors.newPassword?.message}>
                  {errors.newPassword?.message}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            name="newPasswordConfirmation"
            control={control}
            render={({ field }) => (
              <FormControl margin="normal" variant="outlined">
                <InputLabel error={!!errors.newPasswordConfirmation?.message}>
                  Confirmar senha
                </InputLabel>
                <OutlinedInput
                  type={
                    values.showNewPasswordConfirmation ? "text" : "password"
                  }
                  onFocus={clearError}
                  {...field}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className={
                          errors.newPasswordConfirmation?.message && errorButton
                        }
                        onClick={() =>
                          handleClickShowPassword("newPasswordConfirmation")
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showNewPasswordConfirmation ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirmar senha"
                  error={!!errors.newPasswordConfirmation?.message}
                />
                <FormHelperText
                  error={!!errors.newPasswordConfirmation?.message}
                >
                  {errors.newPasswordConfirmation?.message}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Box className="content">
            <a></a>
            <Button
              type="submit"
              onClick={() => {
                clearErrors();
              }}
            >
              Alterar
            </Button>
          </Box>
        </form>
      </FormProvider>
    </PageWrapper>
  );
};
