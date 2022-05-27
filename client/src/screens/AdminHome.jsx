import React from "react";
import { useNavigate } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import Button from "../components/Button/Button";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Button type="button" onClick={() => navigate("/userRegister")} fullWidth>
        USUÁRIOS
      </Button>

      <Button
        type="button"
        onClick={() => navigate("/courseRegister")}
        fullWidth
      >
        CURSOS
      </Button>

      <Button
        type="button"
        onClick={() => navigate("/departmentRegister")}
        fullWidth
      >
        DEPARTAMENTOS
      </Button>
    </PageWrapper>
  );
};

export default AdminHome;
