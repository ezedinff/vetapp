import { TableColumn } from 'react-data-table-component';

const petsTableColumns = [
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Owner',
    selector: 'owner',
  },
  {
    name: 'Species',
    selector: 'species',
  },
  {
    name: 'Breed of pet',
    selector: 'breed',
  },
  {
    name: 'Birth Date',
    selector: 'birth_date',
  },
];

const clientTableColumns = [
  {
    name: 'First Name',
    selector: 'firstName',
  },
  {
    name: 'Last Name',
    selector: 'lastName',
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Phone Number',
    selector: 'phoneNumber',
  },
];

const branchTAbleColumns = [
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Address',
    selector: 'address',
  },
  {
    name: 'Status',
    selector: 'status',
  },
  {
    name: 'Phone Number',
    selector: 'phoneNumber',
  },
  {
    status: 'Main Office',
    selector: 'isMainOffice',
  },
];

const supplierTableColumns = clientTableColumns;
const usersTableColumns = [
  {
    name: 'First Name',
    selector: 'firstName',
  },
  {
    name: 'Last Name',
    selector: 'lastName',
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Phone Number',
    selector: 'phoneNumber',
  },
  {
    name: 'Assigned Branch',
    selector: 'assigned_branch',
  },
  {
    name: 'Status',
    selector: 'status',
  },
];
export default {
  pets: {
    columns: petsTableColumns,
    data: [],
  },
  clients: {
    columns: clientTableColumns,
    data: [],
  },
  suppliers: {
    columns: supplierTableColumns,
    data: [],
  },
  branches: {
    columns: branchTAbleColumns,
    data: [],
  },
  users: {
    columns: usersTableColumns,
    data: [],
  },
};
