import {
  Grid,
  Typography,
  Divider,
  TextField,
  IconButton,
  Button,
} from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';
import TextInput from 'app/components/Form/TextInput';
import React from 'react';

const SalesBottom = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}></Grid>
      <Grid item md={3}></Grid>
      <Grid item md={3}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="body1" color="textPrimary">
            Subtotal
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Tax
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Grand total
          </Typography>
        </div>
      </Grid>
      <Grid item md={3}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="body1" color="textPrimary">
            0.00
          </Typography>
          <Typography variant="body1" color="textPrimary">
            0.00
          </Typography>
          <Typography variant="body1" color="textPrimary">
            0.00
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

const ProductForm = () => {
  const columns = ['Product', 'Price', 'Qty', 'Discount'];
  const elements = [];
  return (
    <>
      <Grid container>
        {columns.map(column => (
          <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" color="textPrimary">
              {column}
            </Typography>
          </Grid>
        ))}
        <Divider />
      </Grid>
      <Grid container spacing={2} style={{ margin: 'auto' }}>
        {columns.map(c => {
          return c !== '' ? (
            <Grid item xs={12} md={3}>
              <TextInput name="" label="" example="" />
            </Grid>
          ) : (
            <Grid item xs={12} md={2}>
              <IconButton>
                <Close />
              </IconButton>
            </Grid>
          );
        })}
      </Grid>
      <SalesBottom />
    </>
  );
};
const AddProduct = () => {
  return <ProductForm />;
};

export default AddProduct;
