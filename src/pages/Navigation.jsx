import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import AppBar from "./AppBar";
import Message from "./Message";
import IntegrationWithWebsiteGuide from "./IntegrationWithWebsiteGuide";
import Home from "./Home";
import Footer from "./Footer";
import IntegrationWithIOSGuide from "./IntegrationWithIOSGuide";
import IntegrationWithAndroidGuide from "./IntegrationWithAndroidGuide";
import IntegrationWithQRGuide from "./IntegrationWithQRGuide";

const useStyles = makeStyles((theme) => ({
  // containerStyle: {
  //   padding: "0 24px !important",
  //   [theme.breakpoints.down("xl")]: {
  //     padding: "0 80px !important",
  //   },
  // },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <Router>
      <div
        style={{
          minHeight: "64px",
          background: "#262D54",
          marginBottom: "20px",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <AppBar />
        </Container>
      </div>
      <div>
        <Container maxWidth="xl" className={classes.containerStyle}>
          <Switch>
            <Route path="/message">
              <Message />
            </Route>

            <Route exact path="/website-integration">
              <IntegrationWithWebsiteGuide />
            </Route>
            <Route exact path="/ios-integration">
              <IntegrationWithIOSGuide />
            </Route>
            <Route exact path="/android-integration">
              <IntegrationWithAndroidGuide />
            </Route>
            <Route exact path="/qr-integration">
              <IntegrationWithQRGuide />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
      <br />
      <br />
      <div
        style={{
          borderTop: "1px solid #E5E7E9 ",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Footer />
        </Container>
      </div>
    </Router>
  );
};

export default Navigation;
