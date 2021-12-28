import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IntegrationWithWebsiteSideBar from "./partial/IntegrationWithWebsiteSideBar";
import IntegrationWithWebsiteGuildDetailSide from "./partial/IntegrationWithWebsiteGuildDetailSide";
import Footer from "./Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttonStyle: {
    border: "none !important",
    color: "#A6ACAF !important",
    textTransform: "none !important",
    "&:hover": {
      background: "none",
    },
  },
});
const IntegrationWithWebSiteGuild = () => {
  const classes = useStyles();
  const [active, setActive] = useState("synopsis");
  const [clickedOn, setClickedOn] = useState("");

  return (
    <div>
      {/* <h1 style={{ color: "#262D54" }}>Web Integration Guide</h1> */}
      <Button
        variant="outlined"
        disableRipple={true}
        component={Link}
        to="/"
        className={classes.buttonStyle}
        startIcon={<ArrowBackIcon />}
      >
        Back To Home
      </Button>
      <Grid container>
        <Grid item xs={2.5}>
          <div style={{ position: "sticky", top: 0 }}>
            <IntegrationWithWebsiteSideBar
              active={active}
              setActive={setActive}
              clickedOn={clickedOn}
              setClickedOn={setClickedOn}
            />
          </div>
        </Grid>
        <Grid item xs={9.5}>
          <IntegrationWithWebsiteGuildDetailSide
            active={active}
            setActive={setActive}
            clickedOn={clickedOn}
            setClickedOn={setClickedOn}
          />
        </Grid>
      </Grid>
      {/* <br />
      <br />
      <Footer /> */}
    </div>
  );
};

export default IntegrationWithWebSiteGuild;
