import React from 'react';
import EarningCard from 'app/components/dashboard/Board';
import { Grid } from '@material-ui/core';
const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        {' '}
        <EarningCard />
      </Grid>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        {' '}
        <EarningCard />
      </Grid>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        {' '}
        <EarningCard />
      </Grid>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        {' '}
        <EarningCard />
      </Grid>
    </Grid>
  );
};
export default Dashboard;
