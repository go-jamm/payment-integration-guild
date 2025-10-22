import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FlutterGuideSideBar from './partial/FlutterGuideSideBar';
import FlutterGuideDetailSide from './partial/FlutterGuideDetailSide';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
    padding: '0px 5%',
  },
}));

const IntegrationWithFlutterGuide = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <FlutterGuideSideBar />
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <FlutterGuideDetailSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default IntegrationWithFlutterGuide;
