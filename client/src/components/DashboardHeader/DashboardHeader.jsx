import { Fragment } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import logoFag from "../../assets/png/logoFag.png";
import exitLogo from "../../assets/svg/exitButton.svg";

const useStyles = makeStyles(() => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    contentHeader: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 auto',
      padding: '0 2rem',
      maxWidth: '60rem',
    },
    navbar: {
      backgroundColor: "#05683E",
    },
    leftSide: {
      display: "flex",
      flexDirection: "row",
    },
    rightSide: {
      display: "flex",
      flexDirection: "row",
    },
    leftLogo: {
      display: "flex",
      width: "70%",
      padding: "20px 0px 20px 0px",
    },
    nomeDoUser: {
      color: "#fff",
      paddingRight: "24px",
    },
    exitIcon: {
      color: "#fff",
    },
  };
});

const DashboardHeader = () => {
  const { container, content, contentHeader, navbar, nomeDoUser, exitIcon, leftSide, rightSide, leftLogo } = useStyles();
  const nome = "Matheus Eduardo";

  return (
    <Box className={container}>
      <nav className={navbar}>
        <Box className={contentHeader}>
          <Box className={leftSide} id="leftSide">
            <img className={leftLogo} src={logoFag} />
          </Box>
          <Box className={rightSide} id="rightSide">
            <h3 className={nomeDoUser}>{nome}</h3>
            {/* // comentario */}
            <img className={exitIcon} src={exitLogo} />
          </Box>
        </Box>
      </nav>
    </Box>
  );
};

export default DashboardHeader;
