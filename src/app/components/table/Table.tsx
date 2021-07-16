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
import { Delete, DeleteOutlined, Edit, EditOutlined } from '@material-ui/icons';
import Container from '@material-ui/core/Container';
import NoData from 'assets/NoData.svg';

import { DataGrid, GridColumns } from '@material-ui/data-grid';
import Box from '@material-ui/core/Box/Box';
import Button from '@material-ui/core/Button';

const c = [
  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1,
  },
  {
    field: 'age',
    headerName: 'Age',
    flex: 1,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    flex: 1,
    valueGetter: params =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
  {
    field: 'id',
    headerName: 'Actions',
    sortable: false,
    flex: 1,
    renderCell: c => (
      <button onClick={() => alert(c.value)}>{JSON.stringify(c.field)}</button>
    ),
  },
];

const d = [
  // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
type Actions = 'Create' | 'Update' | 'Delete';
const CustomDataGrid = ({ title, form, data, columns, actions }) => {
  const [open, setOpen] = useState(false);
  const [rowToBeEdited, setRowToBeEdited] = useState(null);
  const [action, setAction] = useState<Actions>('Create');
  const getEntity = () => {
    let t = title.split(' ');
    t = t[t.length - 1] as string;
    return `${t.substring(0, t.lastIndexOf('s'))}`;
  };
  const getFormTitle = (action: Actions) => {
    const t = getEntity();
    return action === 'Create' ? `${t} Registration` : `Update ${t}`;
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (action: 'Update' | 'Create', id?: string) => {
    if (action === 'Update') {
      const row = data.find(d => d.id === id);
      setRowToBeEdited(row);
      setOpen(true);
      setAction(action);
    } else {
      setRowToBeEdited(null);
      setOpen(true);
      setAction(action);
    }
  };
  const submit = value => {
    console.log(value);
  };
  const addActionButtonIfNeeded = (columns: GridColumns) => {
    const d: GridColumns = [];
    if (actions.edit || actions.delete) {
      d.push({
        field: 'id',
        headerName: 'Actions',
        sortable: false,
        flex: 1,
        renderCell: c => (
          <>
            {actions.edit && (
              <IconButton
                onClick={() => handleOpen('Update', c.value?.toString())}
              >
                <EditOutlined />
              </IconButton>
            )}
            {actions.delete && (
              <IconButton>
                <DeleteOutlined />
              </IconButton>
            )}
          </>
        ),
      });
    }
    return columns.concat(d);
  };
  return (
    <Box maxWidth="xl" component={Paper}>
      {(actions.edit || actions.create) && (
        <CustomDialog
          isOpen={open}
          handleClose={handleClose}
          title={getFormTitle(action)}
          children={
            <Form
              data={rowToBeEdited}
              submitForm={submit}
              elements={form}
              submitButtonTitle={'Create'}
            />
          }
        />
      )}
      <TableHeader
        hideCreate={!actions.create}
        title={title}
        openDialog={() => {
          handleOpen('Create', '');
        }}
      />
      <DataGrid
        autoHeight
        rows={data}
        columns={addActionButtonIfNeeded(columns)}
        pageSize={5}
        checkboxSelection={false}
        disableSelectionOnClick
      />
    </Box>
  );
};
export default React.memo(CustomDataGrid);
