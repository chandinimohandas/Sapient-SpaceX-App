import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FilterPanel from './filter-panel';
import MissionCard from './mission-card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.70)' }}>SpaceX Launch Programs</h2>
      <Grid container spacing={3}>
        <Grid item item xs={12} sm={4} md={3}>
          <Paper className={classes.paper}><FilterPanel /></Paper>
        </Grid>
        <Grid item item xs={12} sm={8} md={9}>
          <Grid container spacing={3}>
            <Grid item item xs={12} sm={6} md={4}>
              <MissionCard />
            </Grid>
            <Grid item item xs={12} sm={6} md={4}>
              <MissionCard />
            </Grid>
            <Grid item item xs={12} sm={6} md={4}>
              <MissionCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
