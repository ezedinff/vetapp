import React from 'react';
import EarningCard from 'app/components/dashboard/Board';
import { Grid } from '@material-ui/core';
import Sales from 'app/components/dashboard/Sales';
import TopProducts from 'app/components/dashboard/Products';
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
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <TopProducts />
      </Grid>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Sales />
      </Grid>
    </Grid>
  );
};
export default Dashboard;
