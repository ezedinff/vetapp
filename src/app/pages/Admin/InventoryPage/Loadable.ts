/**
 *
 * Asynchronously loads the component for InventoryPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const InventoryPage = lazyLoad(
  () => import('./index'),
  module => module.InventoryPage,
);
