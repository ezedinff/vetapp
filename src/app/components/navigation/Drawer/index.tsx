import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Omit } from '@material-ui/types';
import styles from './styles';
import routes from 'app/routes';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export interface NavigatorProps
  extends Omit<DrawerProps, 'classes'>,
    WithStyles<typeof styles> {}

function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;
  const location = useLocation();
  return (
    <Drawer variant="permanent" {...other}>
      <List color="default" disablePadding>
        <ListItem className={clsx(classes.itemCategory, classes.logo)}>
          Veternaria
        </ListItem>
        {routes.map(({ id, path, icon, active }) => (
          <ListItem
            key={id}
            button
            component={RouterLink}
            to={path}
            selected={path === location.pathname}
            className={clsx(
              classes.item,
              path === location.pathname ? classes.itemActiveItem : '',
            )}
          >
            <ListItemIcon className={clsx(classes.itemIcon)}>
              {icon}
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.itemPrimary,
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
        ))}
        {/* <Divider className={classes.divider} /> */}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);
