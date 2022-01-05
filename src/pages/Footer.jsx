import React from "react"; 
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    textAlign: "center",
    color: "#262D54",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
 
}));

const Footer = () => {

  const classes =useStyles()
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <p className={classes.title}>
        Copyright &copy; 2021 FastPay Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
