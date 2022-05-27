import { createTheme } from "@material-ui/core/styles";

const colors = {
  greenPrimary: "#013C1C",
  greenSecondary: "#05683E",
  grey: "#DADADA",
  white: "#FFF",
  red: "#80151B",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.greenSecondary,
    },
    secondary: {
      main: colors.red,
    },
  },
  overrides: {
    MuiDialogActions: {
      root: {
        padding: 0,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
    MuiButton: {
      root: {
        margin: "1rem 0 0.5rem",
        borderRadius: 0,
        fontWeight: "bold",
      },
      containedSizeLarge: {
        maxHeight: "3rem",
        minHeight: "3rem",
        padding: "0 1.75rem",
      },
    },
  },
});
