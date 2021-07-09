/**
 *
 * Asynchronously loads the component for PetsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PetsPage = lazyLoad(
  () => import('./index'),
  module => module.PetsPage,
);
