import {
  Branchs,
  Client,
  Debt,
  Employee,
  Pet,
  Product,
  Purchase,
  Sale,
  Supplier,
} from 'api/api';

/* --- STATE --- */
export interface AdminState {
  loading: boolean;
  branches: Array<Branchs>;
  clients: Array<Client>;
  debts: Array<Debt>;
  // discounts: Array<Discount>;
  pets: Array<Pet>;
  products: Array<Product>;
  purchases: Array<Purchase>;
  sales: Array<Sale>;
  suppliers: Array<Supplier>;
  employee: Array<Employee>;
}
