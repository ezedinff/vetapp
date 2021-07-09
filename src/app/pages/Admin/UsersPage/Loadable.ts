/**
 *
 * Asynchronously loads the component for UsersPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UsersPage = lazyLoad(
  () => import('./index'),
  module => module.UsersPage,
);
