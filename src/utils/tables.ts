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
    name: 'Phone Number',
    selector: 'phoneNumber',
  },
  {
    status: 'Status',
    selector: 'status',
  },
  {
    status: 'Main Office',
    selector: 'isMainOffice',
  },
];
export default {
  pets: {
    columns: petsTableColumns,
    data: [
      { name: 'Ezedin', actions: 'b' },
      { name: 'mess', actions: 'b' },
    ],
  },
  clients: {
    columns: clientTableColumns,
    data: [],
  },
  suppliers: {
    columns: clientTableColumns,
    data: [],
  },
  branches: {
    columns: clientTableColumns,
    data: [],
  },
  users: {
    columns: clientTableColumns,
    data: [],
  },
};
