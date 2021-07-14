import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
const styles = createStyles({
  label: {
    textTransform: 'capitalize',
    fontWeight: 500,
  },
});
interface Props extends WithStyles<typeof styles> {
  label: string;
}
const FormElement: React.FC<Props> = ({ classes, label, children }) => {
  return (
    <>
      <Typography
        className={classes.label}
        variant="subtitle1"
        component={'label'}
      >
        {label}
      </Typography>
      {children}
    </>
  );
};

export default withStyles(styles)(FormElement);
