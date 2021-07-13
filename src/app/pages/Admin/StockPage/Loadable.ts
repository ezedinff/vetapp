/**
 *
 * Asynchronously loads the component for StockPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const StockPage = lazyLoad(
  () => import('./index'),
  module => module.StockPage,
);
