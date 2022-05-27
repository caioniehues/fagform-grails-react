import { Box, makeStyles } from "@material-ui/core";
import Logo from "../../assets/png/logo.png";

import Footer from "../Footer";

const useStyles = makeStyles(() => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignCenter: "center",
      justifyContent: "center",
      margin: "0 auto",
      padding: "2rem",
      maxWidth: "27.5rem",
      width: "100%",
      flex: 1,
      "& form": {
        display: "flex",
        flexDirection: "column",
      },
    },
    image: {
      marginBottom: "2rem",
      maxWidth: "14.0625rem",
    },
  };
});

const PageWrapper = ({ children }) => {
  const { container, content, image } = useStyles();

  return (
    <Box className={container}>
      <Box className={content}>
        <img src={Logo} alt="Logo" className={image} />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default PageWrapper;
