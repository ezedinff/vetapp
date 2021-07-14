import React from 'react';
import {
  Dashboard,
  Pets,
  People,
  Store,
  HomeSharp,
  Person,
  Money,
  LocalHospitalOutlined,
} from '@material-ui/icons';
import DashboardPage from 'app/pages/Admin/Dashboard';
import { PetsPage } from 'app/pages/Admin/PetsPage';
import { ClientsPage } from 'app/pages/Admin/ClientsPage/Loadable';
import { SuppliersPage } from 'app/pages/Admin/SuppliersPage/Loadable';
import { InventoryPage } from 'app/pages/Admin/InventoryPage/Loadable';
import { BranchesPage } from 'app/pages/Admin/BranchesPage/Loadable';
import { UsersPage } from 'app/pages/Admin/UsersPage/Loadable';
import { DebtsPage } from 'app/pages/Admin/DebtsPage/Loadable';
import { ConsultationPage } from 'app/pages/Admin/ConsultationPage/Loadable';
import { SalesPage } from 'app/pages/Admin/SalesPage/Loadable';
import { PurchasePage } from 'app/pages/Admin/PurchasePage/Loadable';
import { StockPage } from 'app/pages/Admin/StockPage/Loadable';
import { ProductPage } from 'app/pages/Admin/ProductPage/Loadable';
import { DiscountPage } from 'app/pages/Admin/DiscountPage/Loadable';
interface CustomRoute {
  id: string;
  icon?: React.ReactNode;
  path?: string;
  active: boolean;
  component?: React.ComponentType<any>;
  children?: CustomRoute[];
  roles: string[];
}
const routes: CustomRoute[] = [
  {
    id: 'Dashboard',
    icon: <Dashboard />,
    path: '/admin/dashboard',
    active: true,
    component: DashboardPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Pets',
    icon: <Pets />,
    path: '/admin/pets',
    active: false,
    component: PetsPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Clients',
    icon: <People />,
    path: '/admin/clients',
    active: false,
    component: ClientsPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Suppliers',
    icon: <People />,
    path: '/admin/suppliers',
    active: false,
    component: SuppliersPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Inventory',
    icon: <Store />,
    active: false,
    component: InventoryPage,
    children: [
      {
        id: 'Sales',
        path: '/admin/sales',
        active: false,
        component: SalesPage,
        roles: ['admin', 'manager'],
      },
      {
        id: 'Purchases',
        path: '/admin/purchases',
        active: false,
        component: PurchasePage,
        roles: ['admin', 'manager'],
      },
      {
        id: 'Products',
        path: '/admin/products',
        active: false,
        component: ProductPage,
        roles: ['admin', 'manager'],
      },
      {
        id: 'Discounts',
        path: '/admin/discounts',
        active: false,
        component: DiscountPage,
        roles: ['admin', 'manager'],
      },
    ],
    roles: ['admin', 'manager'],
  },
  {
    id: 'Branches',
    icon: <HomeSharp />,
    path: '/admin/branches',
    active: false,
    component: BranchesPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Users',
    icon: <Person />,
    path: '/admin/users',
    active: false,
    component: UsersPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Debt',
    icon: <Money />,
    path: '/admin/debts',
    active: false,
    component: DebtsPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Consultation',
    icon: <LocalHospitalOutlined />,
    path: '/admin/consultation',
    active: false,
    component: ConsultationPage,
    roles: ['admin', 'manager'],
  },
];
export default routes;
