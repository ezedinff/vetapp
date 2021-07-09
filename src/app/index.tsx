/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import AdminLayout from './components/layouts/AdminLayout';
import Page from './pages/Admin/Page';
import { LoginPage } from './pages/Auth/LoginPage';
export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Veterinarian app"
        defaultTitle="Veterinarian app"
      >
        <meta name="description" content="A Veterinarian application" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminLayout} />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
