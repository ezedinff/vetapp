import { GridColumns } from '@material-ui/data-grid';
const petsTableColumns: GridColumns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    headerName: 'Owner',
    field: 'owner',
    flex: 1,
  },
  {
    headerName: 'Species',
    field: 'species',
    flex: 1,
  },
  {
    headerName: 'Breed of pet',
    field: 'breed',
    flex: 1,
  },
  {
    headerName: 'Birth Date',
    field: 'birth_date',
    flex: 1,
  },
];

const clientTableColumns = [
  {
    headerName: 'First Name',
    field: 'firstName',
    flex: 1,
  },
  {
    headerName: 'Last Name',
    field: 'lastName',
    flex: 1,
  },
  {
    headerName: 'Email',
    field: 'email',
    flex: 1,
  },
  {
    headerName: 'Phone Number',
    field: 'cellPhone',
    flex: 1,
  },
];

const branchTAbleColumns = [
  {
    headerName: 'Name',
    field: 'name',
    flex: 1,
  },
  {
    headerName: 'Address',
    field: 'address',
    flex: 1,
  },
  {
    headerName: 'Status',
    field: 'status',
    flex: 1,
  },
  {
    headerName: 'Phone Number',
    field: 'phoneNumber',
    flex: 1,
  },
  {
    headerName: 'Main Office',
    field: 'isMainOffice',
    flex: 1,
  },
];

const supplierTableColumns = clientTableColumns;
const usersTableColumns = [
  {
    headerName: 'First Name',
    field: 'firstName',
    flex: 1,
  },
  {
    headerName: 'Last Name',
    field: 'lastName',
    flex: 1,
  },
  {
    headerName: 'Email',
    field: 'email',
    flex: 1,
  },
  {
    headerName: 'Phone Number',
    field: 'phoneNumber',
    flex: 1,
  },
  {
    headerName: 'Assigned Branch',
    field: 'assigned_branch',
    flex: 1,
  },
  {
    headerName: 'Status',
    field: 'status',
    flex: 1,
  },
];

const productsTableColumns = [
  {
    headerName: 'Product Name',
    field: 'name',
    flex: 1,
  },
  {
    headerName: 'Description',
    field: 'description',
    flex: 1,
  },
  {
    headerName: 'Brand',
    field: 'brand',
    flex: 1,
  },
  {
    headerName: 'Price',
    field: 'price',
    flex: 1,
  },
  {
    headerName: 'Category',
    field: 'category',
    flex: 1,
  },
  {
    headerName: 'Measurement Unit',
    field: 'unit',
    flex: 1,
  },
  {
    headerName: 'Available Amount',
    field: 'available',
    flex: 1,
  },
];

const purchaseTableColumns = [
  {
    headerName: 'Product',
    field: 'product',
    flex: 1,
  },
  {
    headerName: 'Quantity',
    field: 'quantity',
    flex: 1,
  },
  {
    headerName: 'Supplier',
    field: 'supplier',
    flex: 1,
  },
  {
    headerName: 'Unit Price',
    field: 'unit_price',
    flex: 1,
  },
  {
    headerName: 'Payment Method',
    field: 'payment_method',
    flex: 1,
  },
];
const discountsTableColumns = [
  {
    headerName: 'Type',
    field: 'type',
    flex: 1,
  },
  {
    headerName: 'Description',
    field: 'description',
    flex: 1,
  },
  {
    headerName: 'Approved by',
    field: 'approver',
    flex: 1,
  },
  {
    headerName: 'Amount',
    field: 'amount',
    flex: 1,
  },
  {
    headerName: 'Status',
    field: 'status',
    flex: 1,
  },
];

const salesTableColumns = [
  {
    headerName: 'Client',
    field: 'client',
    flex: 1,
  },
  {
    headerName: 'cashier',
    field: 'user',
    flex: 1,
  },
  {
    headerName: 'Payment Method',
    field: 'payment_method',
    flex: 1,
  },
  {
    headerName: 'product',
    field: 'products',
    flex: 1,
  },
];

export default {
  pets: {
    columns: petsTableColumns,
    data: [
      {
        id: '12',
        name: 'Cocky',
        owner: 'Ezedin',
        species: 'Dog',
        breed: 'German breed',
        birth_date: new Date().toISOString().substring(0, 10),
      },
    ],
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
  products: {
    columns: productsTableColumns,
    data: [],
  },
  purchases: {
    columns: purchaseTableColumns,
    data: [],
  },
  discounts: {
    columns: discountsTableColumns,
    data: [],
  },
  sales: {
    columns: salesTableColumns,
    data: [],
  },
};
