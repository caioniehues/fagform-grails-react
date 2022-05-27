import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import "./styles/styles.css";
import { RoutesApp } from "./routes/routes";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesApp />
    </ThemeProvider>
  );
}
