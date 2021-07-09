/**
 *
 * Asynchronously loads the component for ClientsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ClientsPage = lazyLoad(
  () => import('./index'),
  module => module.ClientsPage,
);
