import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const Board = props => {
  return (
    <Card sx={{ height: '100%', borderRight: '3px solid black' }} {...props}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TASKS PROGRESS
            </Typography>
            <Typography color="textPrimary" variant="h4">
              75.5%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar style={{ background: '#fff' }}>
              <InsertChartIcon style={{ color: '#17a2b8' }} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Board;
