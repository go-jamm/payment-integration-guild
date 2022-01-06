import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import WebsiteGuideSideBar from "./partial/WebsiteGuideSideBar";
import WebsiteGuideDetailSide from "./partial/WebsiteGuideDetailSide";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    border: "none !important",
    color: "#A6ACAF !important",
    textTransform: "none !important",
    "&:hover": {
      background: "none",
    },
  },
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
const IntegrationWithWebsiteGuide = () => {
  const classes = useStyles();

  return (
    <div>
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
        <Grid className={classes.hide} item sm={3} md={2.5} lg={2.5}>
          <div style={{ position: "sticky", top: 65 }}>
            <WebsiteGuideSideBar />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9.5} lg={9.5}>
          <WebsiteGuideDetailSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default IntegrationWithWebsiteGuide;
