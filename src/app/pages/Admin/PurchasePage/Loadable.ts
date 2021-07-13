/**
 *
 * Asynchronously loads the component for PurchasePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PurchasePage = lazyLoad(
  () => import('./index'),
  module => module.PurchasePage,
);
