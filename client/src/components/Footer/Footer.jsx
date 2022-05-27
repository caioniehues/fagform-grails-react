import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    footer: {
      display: "flex",
      justifyContent: "center",
      background: "#80151b",
      color: "#fff",
      padding: "2rem 0",
    },
  };
});

const Footer = () => {
  const { footer } = useStyles();

  return (
    <Box className={footer}>
      <Typography>© 2022. Alguns direitos reservados.</Typography>
    </Box>
  );
};

export default Footer;
