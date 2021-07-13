/**
 *
 * Asynchronously loads the component for SalesPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SalesPage = lazyLoad(
  () => import('./index'),
  module => module.SalesPage,
);
