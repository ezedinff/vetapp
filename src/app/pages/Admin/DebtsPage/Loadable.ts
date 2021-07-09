/**
 *
 * Asynchronously loads the component for DeptsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DebtsPage = lazyLoad(
  () => import('./index'),
  module => module.DebtsPage,
);
