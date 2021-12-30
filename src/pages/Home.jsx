import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import QrCode2Icon from "@mui/icons-material/QrCode2";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    color: "#262D54",
    fontSize: "20px",
    // fontWeight: 700,
  },
  detailFontStyle: {
    lineHeight: "22px",
    color: "#181c34",
  },
  card: {
    cursor: "pointer",
    borderLeft: "5px solid #181c34",
    borderRadius: "5px",
    padding: "30px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    [theme.breakpoints.down("xl")]: {
      minHeight: "86px",
    },
  },
  cardDetailFontStyle: {
    fontSize: "13px",
    color: "#4D5656",
    lineHeight: "22px",
    margin: "18px 0 0 0",
  },
  linkStyle: {
    textDecoration: "none",
  },
  containerStyle: {
    padding: "0 24px !important",
    [theme.breakpoints.down("xl")]: {
      padding: "0 80px !important",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Container maxWidth="xl" className={classes.containerStyle}> */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "calc(100vh - 125px)", padding: "20px 0px" }}
      >
        <div>
          <h1 style={{ color: "#262D54", textAlign: "center", marginTop: 0 }}>
            FastPay Developers Arena
          </h1>
          <p
            className={classes.detailFontStyle}
            style={{ textAlign: "center" }}
          >
            Accept payments with our FastPay’s APIs. We process payments.
            <br /> Simple API, Easy Integration, Less Effort.
          </p>
          <br />
          <br />
          <Grid container rowSpacing={4} columnSpacing={4}>
            <Grid item xs={6}>
              <Link to="/website-integration" className={classes.linkStyle}>
                <div className={classes.card}>
                  <p className={classes.title}>Integrate With Website</p>
                  <p className={classes.cardDetailFontStyle}>
                    No Delays or closing times. Receive Payments around the
                    clock from the comfort of your mobile
                  </p>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/ios-integration" className={classes.linkStyle}>
                <div className={classes.card}>
                  <p className={classes.title}>
                    Integrate With Mobile App (IOS)
                  </p>
                  <p className={classes.cardDetailFontStyle}>
                    Easiest payment gateway to integrate with 24x7 support
                  </p>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/android-integration" className={classes.linkStyle}>
                <div className={classes.card}>
                  <p className={classes.title}>
                    Integrate With Mobile App (Android)
                  </p>
                  <p className={classes.cardDetailFontStyle}>
                    Easiest payment gateway to integrate with 24x7 support
                  </p>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/qr-integration" className={classes.linkStyle}>
                <div className={classes.card}>
                  <p className={classes.title}>QR Gereration API</p>
                  <p className={classes.cardDetailFontStyle}>
                    Easiest payment gateway to integrate with 24x7 support
                  </p>
                </div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Home;
