import { useForm, FormProvider } from "react-hook-form";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PageWrapper from "../components/PageWrapper";
import TextField from "../components/TextField";
import Button from "../components/Button";

const schema = yup.object({
  username: yup.string().required("E-mail é obrigatório"),
});

export const ForgotPassword = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
    },
  });

  const { clearErrors, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageWrapper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography style={{ color: "gray" }} variant="h6">
            Informe o e-mail cadastrado para a recuperação de senha:
          </Typography>
          <TextField name="username" label="E-mail" />

          <Box className="content">
            <Box className="link">
              <Link to="/">Retornar ao login</Link>
            </Box>

            <Button type="submit" onClick={() => clearErrors()}>
              Enviar
            </Button>
          </Box>
        </form>
      </FormProvider>
    </PageWrapper>
  );
};
