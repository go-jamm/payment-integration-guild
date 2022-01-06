import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    padding: "20px",
    [theme.breakpoints.down("xl")]: {
      padding: "15px",
    },
  },
  title: {
    margin: 0,
    textAlign: "center",
    color: "#262D54",
    fontSize: "16px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "12px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerStyle}>
      <p className={classes.title}>
        Copyright &copy; 2021 FastPay Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
