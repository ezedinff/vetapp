/**
 *
 * Asynchronously loads the component for ConsultationPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ConsultationPage = lazyLoad(
  () => import('./index'),
  module => module.ConsultationPage,
);
