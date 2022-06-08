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
    MuiTableRow: {
      root: {
        display: "flex",
        alignItems: "center",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
        margin: "0.5rem 0",
        background: "#fff",
      },
      head: {
        boxShadow: "none !important",
        margin: "1rem 0 -1rem 0 !important",
        background: "#f5f5f5",
      },
    },
    MuiTableCell: {
      root: {
        flex: 5,
        border: "none !important",
        position: "relative",
        zIndex: 1000,
      },
      paddingCheckbox: {
        flex: 1,
      },
      head: {
        fontWeight: "bold",
        fontSize: "1rem",
      },
    },
    MuiDialog: {
      paper: {
        background: "#f5f5f5",
      },
    },
    MuiDialogContent: {
      root: {
        padding: 0,
      },
    },
  },
});
