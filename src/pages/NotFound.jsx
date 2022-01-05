import React from "react";
import { Link } from "react-router-dom";
import Page404 from "../assets/images/Page404.png";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "34px",
    color: "#444",
    letterSpacing: "3.84px",
    lineHeight: "20px",
    fontFamily: '"Inter",sans-serif',
    fontWeight: 500,
    margin: "0 0 25px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "50px",
    },
  },
  detailFontStyle: {
    fontSize: "20px",
    lineHeight: "32px",
    margin: "0 0 25px",
    color: "#5f6065",
    fontWeight: 400,
  },
 

  image: {
    maxWidth: "50%",
  },
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "calc(100vh - 125px)", padding: "20px 0px" }}
    >
      <div style={{ width: "60%", textAlign: "center" }}>
        <img src={Page404} alt="" className={classes.image} />
        <h1 className={classes.title}>Page Not Found</h1>

        <h3 className={classes.detailFontStyle}>
          Sorry, we couldn't find the page you are looking for
        </h3>

        {/* <Link to="/" className={styles.button}> */}
        <Button component={Link} to="/" variant="contained" disableElevation>
          Back TO HOME
        </Button>

        {/* </Link> */}
      </div>
    </Grid>
  );
};

export default NotFound;
