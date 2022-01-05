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
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
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
    [theme.breakpoints.down("sm")]: {
      padding: "15px 20px",
      minHeight: "138px",
    },
  },
  cardDetailFontStyle: {
    fontSize: "13px",
    color: "#4D5656",
    lineHeight: "22px",
    margin: "18px 0 0 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      margin: "10px 0 0 0",
    },
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
  br: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  iconStyle: {
    fontSize: "80px !important",
    color: "#E5E7E9 ",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px !important",
    },
  },
  iconDiv: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      order: -1,
      marginBottom: "10px !important",
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
            <br className={classes.br} /> Simple API, Easy Integration, Less
            Effort.
          </p>
          <br />
          <br />
          <Grid container rowSpacing={4} columnSpacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/website-integration",
                  search: "?topic=synopsis",
                }}
                className={classes.linkStyle}
              >
                <div className={classes.card}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>Integrate With Website</p>
                      <p className={classes.cardDetailFontStyle}>
                        No Delays or closing times. Receive Payments around the
                        clock from the comfort of your mobile
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <LaptopMacIcon className={classes.iconStyle} />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/ios-integration",
                  search: "?topic=scaffolding-provided",
                }}
                className={classes.linkStyle}
              >
                <div className={classes.card}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>
                        Integrate With Mobile App (IOS)
                      </p>
                      <p className={classes.cardDetailFontStyle}>
                        Easiest payment gateway to integrate with 24x7 support
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <AppleIcon className={classes.iconStyle} />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/android-integration",
                  search: "?topic=scaffolding-provided",
                }}
                className={classes.linkStyle}
              >
                <div className={classes.card}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>
                        Integrate With Mobile App (Android)
                      </p>
                      <p className={classes.cardDetailFontStyle}>
                        Easiest payment gateway to integrate with 24x7 support
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <AndroidIcon className={classes.iconStyle} />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/qr-integration",
                  search: "?topic=synopsis",
                }}
                className={classes.linkStyle}
              >
                <div className={classes.card}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>QR Gereration API</p>
                      <p className={classes.cardDetailFontStyle}>
                        Easiest payment gateway to integrate with 24x7 support
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <QrCode2Icon className={classes.iconStyle} />
                    </Grid>
                  </Grid>
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
