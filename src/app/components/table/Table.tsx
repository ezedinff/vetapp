import React from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import TableHeader from './TableHeader';
import Form from 'app/components/Form';
import forms from 'utils/forms';
import CustomDialog from '../Dialog';

import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit } from '@material-ui/icons';
import Container from '@material-ui/core/Container';
import NoData from 'assets/NoData.svg';
const EmptyTableBody = () => {
  return (
    <Container
      style={{
        padding: '64px',
        position: 'relative',
        right: '-30em',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="subtitle1"
        color="textSecondary"
        children={'No Data'}
      />
    </Container>
  );
};
const Table = ({ title, data, columns }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const submit = value => {
    console.log(value);
  };
  const getEntity = () => {
    let t = title.split(' ');
    t = t[t.length - 1] as string;
    console.log(t);
    return `${t.substring(0, t.lastIndexOf('s'))}`;
  };
  const getFormTitle = (action: 'Create' | 'Edit') => {
    const t = getEntity();
    return action === 'Create' ? `${t} Registration` : `Update ${t}`;
  };
  return (
    <>
      <CustomDialog
        isOpen={open}
        handleClose={handleClose}
        title={getFormTitle('Create')}
        children={
          <Form
            submitForm={submit}
            elements={forms[`${getEntity()}s`]}
            submitButtonTitle={'Create'}
          />
        }
      />
      <TableContainer component={Paper}>
        <TableHeader title={title} openDialog={handleOpen} />
        <MuiTable size="small">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={`head-${column.name}`}
                  children={
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                      }}
                      children={column.name}
                    />
                  }
                />
              ))}
              <TableCell key={`head-actions`}>
                <Typography
                  variant="subtitle1"
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                  }}
                  children={'actions'}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          {Boolean(data.length) ? (
            <TableBody>
              {data.map((d, index) => {
                return (
                  <TableRow key={`row-${index}`}>
                    {columns.map(column => (
                      <TableCell key={`body-${column.name}`}>
                        {d[column.selector]}
                      </TableCell>
                    ))}
                    {
                      <TableCell key={`actions-${index}`}>
                        <IconButton size="small">
                          <Edit />
                        </IconButton>
                        <IconButton size="small">
                          <Delete />
                        </IconButton>
                      </TableCell>
                    }
                  </TableRow>
                );
              })}
            </TableBody>
          ) : (
            <EmptyTableBody />
          )}
        </MuiTable>
      </TableContainer>
      {/* <TablePagination  rowsPerPageOptions={[10, 50]} /> */}
    </>
  );
};
export default React.memo(Table);
