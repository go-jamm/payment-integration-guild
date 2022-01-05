import React from "react";
import Grid from "@mui/material/Grid";
import IOSGuideSideBar from "./partial/IOSGuideSideBar";
import IOSGuideDetailSide from "./partial/IOSGuideDetailSide";

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
const IntegrationWithIOSGuide = () => {
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
          <div style={{ position: "sticky", top: 0 }}>
            <IOSGuideSideBar />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={9.5} lg={9.5}>
          <IOSGuideDetailSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default IntegrationWithIOSGuide;
