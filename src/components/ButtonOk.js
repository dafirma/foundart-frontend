import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ButtonOk() {
  const classes = useStyles();

  return (
    <div>
      
      <Button variant="contained" color="primary" className={classes.button}>
        Apply
      </Button>
      {/* <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button> */}
      
        <Button variant="contained" component="span" className={classes.button}>
          Cancel
        </Button>

    </div>
  );
}