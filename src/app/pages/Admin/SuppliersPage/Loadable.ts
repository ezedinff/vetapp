/**
 *
 * Asynchronously loads the component for SuppliersPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SuppliersPage = lazyLoad(
  () => import('./index'),
  module => module.SuppliersPage,
);
