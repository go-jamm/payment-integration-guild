import React, { useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import flutter from "../assets/images/flutter.svg";
import react from "../assets/images/react.svg";

import { ActiveMenuContext } from "../context/ActiveMenuContext";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "calc(100vh - 145px)",
    padding: "20px 0px",
    [theme.breakpoints.down("xl")]: {
      minHeight: "calc(100vh - 130px)",
      padding: "20px 0px",
    },
  },
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
      padding: "20px 30px",
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
    "&:hover > flutter": {
      "-webkit-filter": "grayscale(0%)",
      filter: "grayscale(0%)",
    },
  },
  flutter: {
    "-webkit-filter": "grayscale(100%)",
    filter: "grayscale(100%)",
    "&:hover": {
      "-webkit-filter": "grayscale(0%)",
      filter: "grayscale(0%)",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const { addActiveId, fastPayActiveId } = useContext(ActiveMenuContext);
  const changeIconColor = (id, iconColor) => {
    document.getElementById(id).style.color = iconColor;
    document.getElementById(id).style.transition = " all 1s";
  };
  const resetIconColor = (id) => {
    document.getElementById(id).style.color = "#E5E7E9";
  };
  useEffect(() => {
    addActiveId({ id: "" });
  }, []);
  return (
    <div>
      {/* <Container maxWidth="xl" className={classes.containerStyle}> */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.main}
      >
        <div>
          <h1 style={{ color: "#262D54", textAlign: "center", marginTop: 0 }}>
            FastPay Developers Arena
          </h1>
          <p
            className={classes.detailFontStyle}
            style={{ textAlign: "center", marginBottom: 0 }}
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
                }}
                className={classes.linkStyle}
              >
                <div
                  className={classes.card}
                  onMouseOver={() =>
                    changeIconColor("LaptopMacIcon", "#7FB3D5")
                  }
                  onMouseLeave={() => resetIconColor("LaptopMacIcon")}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>Integrate With Website</p>
                      <p className={classes.cardDetailFontStyle}>
                        No Delays or closing times. Receive Payments around the
                        clock from the comfort of your mobile
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <LaptopMacIcon
                        className={classes.iconStyle}
                        id="LaptopMacIcon"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/ios-integration",
                }}
                className={classes.linkStyle}
              >
                <div
                  className={classes.card}
                  onMouseOver={() => changeIconColor("AppleIcon", "#5D6D7E")}
                  onMouseLeave={() => resetIconColor("AppleIcon")}
                >
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
                      <AppleIcon className={classes.iconStyle} id="AppleIcon" />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/android-integration",
                }}
                className={classes.linkStyle}
              >
                <div
                  className={classes.card}
                  onMouseOver={() => changeIconColor("AndroidIcon", "#3DDC84")}
                  onMouseLeave={() => resetIconColor("AndroidIcon")}
                >
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
                      <AndroidIcon
                        className={classes.iconStyle}
                        id="AndroidIcon"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/qr-integration",
                }}
                className={classes.linkStyle}
              >
                <div
                  className={classes.card}
                  onMouseOver={() => changeIconColor("QrCode2Icon", "#273746")}
                  onMouseLeave={() => resetIconColor("QrCode2Icon")}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>QR Gereration API</p>
                      <p className={classes.cardDetailFontStyle}>
                        Easiest payment gateway to integrate with 24x7 support
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <QrCode2Icon
                        className={classes.iconStyle}
                        id="QrCode2Icon"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={3}>

            </Grid> */}
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/flutter-integration",
                }}
                className={classes.linkStyle}
              >
                <div
                  className={classes.card}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>Flutter Plugin</p>
                      <p className={classes.cardDetailFontStyle}>
                        Easiest payment gateway to integrate with 24x7 support
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <img
                        src={flutter}
                        alt=""
                        height="80"
                        className={classes.flutter}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                to={{
                  pathname: "/react-native-integration",
                }}
                className={classes.linkStyle}
              >
                <div
                  className={classes.card}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={9}>
                      <p className={classes.title}>React Native Package</p>
                      <p className={classes.cardDetailFontStyle}>
                        Easiest payment gateway to integrate with 24x7 support
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.iconDiv}>
                      <img
                        src={react}
                        alt=""
                        height="80"
                        className={classes.flutter}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Link>
            </Grid>
          </Grid>
          <br />
          <br />
        </div>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Home;
