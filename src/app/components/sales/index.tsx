import {
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react';
import AddProduct from './left/AddProduct';
import SalesDetail from './right/SalesDetail';

const Sales = () => {
  return (
    <Grid container spacing={2} style={{ padding: '0 24px' }}>
      <Grid item md={8}>
        <Container component={Paper} style={{ padding: '24px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Typography variant="h5" color="textSecondary">
                Sales
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginBottom: '8px' }}
              >
                <Add /> Product
              </Button>
            </div>
          </div>
          <Divider color="textSecondary" style={{ marginBottom: '16px' }} />
          <AddProduct />
        </Container>
      </Grid>
      <Grid item md={4}>
        <SalesDetail />
      </Grid>
    </Grid>
  );
};

export default Sales;
