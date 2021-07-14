import { GridSize } from '@material-ui/core';

export interface FormElement {
  name: string;
  type:
    | 'text'
    | 'password'
    | 'number'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'date'
    | 'login-checkbox';
  placeholder: string;
  data?: {
    from: 'array' | 'remote';
    url?: string;
    options: { value: string; label: string }[];
  };
  size: { xs: GridSize; md: GridSize };
}

const loginForm: FormElement[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'keepMeLoggedIn',
    type: 'login-checkbox',
    placeholder: 'Keep me logged in',
    size: { xs: 12, md: 12 },
  },
];

const petRegistrationForm: FormElement[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'owner',
    type: 'text',
    placeholder: 'Owner of pet',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'species',
    type: 'select',
    placeholder: 'Specie',
    data: {
      from: 'array',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },
    size: { xs: 12, md: 12 },
  },
  {
    name: 'breed',
    type: 'text',
    placeholder: 'Breed of pet',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'bod',
    type: 'date',
    placeholder: 'Birth Date',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'photo',
    type: 'text',
    placeholder: 'Photo',
    size: { xs: 12, md: 12 },
  },
];

const productRegistrationForm = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Product Name',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'description',
    type: 'text',
    placeholder: 'Product Description',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'brand',
    type: 'text',
    placeholder: 'Product Brand',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'price',
    type: 'text',
    placeholder: 'Product Price',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'category',
    type: 'text',
    placeholder: 'Product Category',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'unit',
    type: 'text',
    placeholder: 'Measurement Unit',
    size: { xs: 12, md: 12 },
  },
];
const clientRegistrationFrom = [
  {
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
    size: { xs: 6, md: 6 },
  },
  {
    name: 'lastName',
    type: 'text',
    placeholder: 'Last Name',
    size: { xs: 6, md: 6 },
  },
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'phoneNumber',
    type: 'text',
    placeholder: 'Phone Number',
    size: { xs: 12, md: 12 },
  },
];
const inventoryRegistrationFrom = [];
const branchRegistrationFrom: FormElement[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Branch Name',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Branch Address',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Phone Number',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'status',
    type: 'select',
    placeholder: 'Branch Status',
    data: {
      from: 'array',
      options: ['open', 'building', 'remodeling', 'closed'].map(s => ({
        value: s,
        label: s,
      })),
    },
    size: { xs: 12, md: 12 },
  },
];
const userRegistrationFrom = [];
const debtRegistrationFrom = [];
const employeeRegistrationForm: FormElement[] = [
  {
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
    size: { xs: 4, md: 4 },
  },
  {
    name: 'middleName',
    type: 'text',
    placeholder: 'Middle Name',
    size: { xs: 4, md: 4 },
  },
  {
    name: 'lastName',
    type: 'text',
    placeholder: 'Last Name',
    size: { xs: 4, md: 4 },
  },
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    size: { xs: 12, md: 6 },
  },
  {
    name: 'phoneNumber',
    type: 'text',
    placeholder: 'Phone Number',
    size: { xs: 12, md: 6 },
  },
  {
    name: 'employee_id',
    type: 'text',
    placeholder: 'Employee Id',
    size: { xs: 12, md: 4 },
  },
  {
    name: 'national_id',
    type: 'text',
    placeholder: 'National Id',
    size: { xs: 12, md: 4 },
  },
  {
    name: 'veterinarian_id',
    type: 'text',
    placeholder: 'Veterinarian Id',
    size: { xs: 12, md: 4 },
  },
  {
    name: 'assigned_branch_office',
    type: 'text',
    placeholder: 'Assign to branch office',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'status',
    type: 'select',
    placeholder: 'Status',
    data: {
      from: 'array',
      options: ['active', 'inactive', 'on vacation', 'ill'].map(s => ({
        value: s,
        label: s,
      })),
    },
    size: { xs: 12, md: 12 },
  },
  {
    name: 'hiring_date',
    type: 'text',
    placeholder: 'Hiring Date',
    size: { xs: 12, md: 12 },
  },
];

const purchasesRegistrationForm: FormElement[] = [
  {
    name: 'product',
    type: 'text',
    placeholder: 'Product Name',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'amount',
    type: 'text',
    size: { xs: 12, md: 12 },
    placeholder: 'Amount',
  },
  {
    name: 'supplier',
    type: 'select',
    size: { xs: 12, md: 12 },
    placeholder: 'Supplier',
  },
  {
    name: 'unit_price',
    type: 'text',
    size: { xs: 12, md: 12 },
    placeholder: 'Unit Price',
  },
  {
    name: 'payment_method',
    type: 'select',
    size: { xs: 12, md: 12 },
    placeholder: 'Payment Method',
  },
];

const discountRegistrationForm: FormElement[] = [
  {
    name: 'type',
    type: 'select',
    data: {
      from: 'array',
      options: [
        { value: 'amount', label: 'Amount' },
        { value: 'percentage', label: 'Percentage' },
      ],
    },
    size: { xs: 12, md: 12 },
    placeholder: 'Type',
  },
  {
    name: 'description',
    type: 'text',
    size: { xs: 12, md: 12 },
    placeholder: 'Description',
  },
  {
    name: 'amount',
    type: 'text',
    size: { xs: 12, md: 12 },
    placeholder: 'Amount',
  },
  {
    name: 'start_date',
    type: 'date',
    size: { xs: 6, md: 6 },
    placeholder: 'Discount Start date',
  },
  {
    name: 'end_date',
    type: 'date',
    size: { xs: 6, md: 6 },
    placeholder: 'Discount End date',
  },
];
export default {
  Pets: petRegistrationForm,
  Clients: clientRegistrationFrom,
  inventory: inventoryRegistrationFrom,
  Branches: branchRegistrationFrom,
  Users: userRegistrationFrom,
  Debts: debtRegistrationFrom,
  login: loginForm,
  Employees: employeeRegistrationForm,
  Discounts: discountRegistrationForm,
  purchases: purchasesRegistrationForm,
  Products: productRegistrationForm,
};
