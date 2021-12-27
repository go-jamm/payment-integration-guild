import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "./AppBar";
import Message from "./Message";
import IntegrationGuild from "./IntegrationGuild";

const Navigation = () => {
  return (
    <Router>
      <div style={{ minHeight: "64px", background: "#262D54" }}>
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <AppBar />
        </Container>
      </div>
      <div>
        <Container maxWidth="xl">
          <IntegrationGuild />
        </Container>
      </div>

      {/* <div>
        <Switch>
          <Route path="/message">
            <Message />
          </Route>

          <Route exact path="/">
            <IntegrationGuild />
          </Route>
        </Switch>
      </div> */}
    </Router>
  );
};

export default Navigation;
