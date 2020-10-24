import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FilterPanel from './filter-panel';
import MissionCard from './mission-card';

export default function Home() {
  const [spaceXdata, setSpaceXdata] = useState([]);
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <h2 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.70)' }}>SpaceX Launch Programs</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <Paper><FilterPanel setSpaceXdata={setSpaceXdata} setError={setError} /></Paper>
            <p style={{ textAlign: 'center', fontSize: '0.6rem' }}>Developed by ~ Chandhini Mohandas</p>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Grid container spacing={3}>
              {spaceXdata && spaceXdata.map((mission, index) => {
                return <Grid item xs={12} sm={6} md={3} key={index}>
                  <MissionCard mission={mission} />
                </Grid>
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
