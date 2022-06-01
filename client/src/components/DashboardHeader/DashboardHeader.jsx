import { Box, makeStyles, IconButton } from "@material-ui/core";
import logoFag from "../../assets/png/logoFag.png";
import exitLogo from "../../assets/svg/exitButton.svg";

const useStyles = makeStyles(({ palette }) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    contentHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 auto",
      padding: "0 2rem",
      maxWidth: "75rem",
    },
    navbar: {
      backgroundColor: palette.primary.main,
    },
    rightSide: {
      display: "flex",
      alignItems: "center",
    },
    leftLogo: {
      display: "flex",
      width: "70%",
      minWidth: "164px",
      padding: "20px 0px 20px 0px",
    },
    nomeDoUser: {
      paddingRight: "20px",
      lineHeight: 2,
      color: "#fff",
    },
    exitIcon: {
      color: "#fff",
    },
  };
});

const DashboardHeader = () => {
  const {
    container,
    contentHeader,
    navbar,
    nomeDoUser,
    exitIcon,
    leftSide,
    rightSide,
    leftLogo,
  } = useStyles();
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

            <IconButton>
              <img className={exitIcon} src={exitLogo} />
            </IconButton>
          </Box>
        </Box>
      </nav>
    </Box>
  );
};

export default DashboardHeader;
