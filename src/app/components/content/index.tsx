import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import Page from 'app/pages/Admin/Page';
import routes from 'app/routes';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
  });

export interface ContentProps extends WithStyles<typeof styles> {}

function Content(props: ContentProps) {
  const { classes } = props;
  const { path } = useRouteMatch();
  return (
    <>
      fuck you
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={`${route.path}`} children={<Page />} />
        ))}
      </Switch>
    </>
  );
}

export default withStyles(styles)(Content);
