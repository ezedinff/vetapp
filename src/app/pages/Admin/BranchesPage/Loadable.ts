/**
 *
 * Asynchronously loads the component for BranchesPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BranchesPage = lazyLoad(
  () => import('./index'),
  module => module.BranchesPage,
);
