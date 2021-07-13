/**
 *
 * Asynchronously loads the component for DiscountPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DiscountPage = lazyLoad(
  () => import('./index'),
  module => module.DiscountPage,
);
