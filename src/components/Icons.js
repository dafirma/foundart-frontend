import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom'
import '../stylesheets/Icons.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'fixed',
    top: '80%',
    left:'60%'
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: blue[800],
    },
  },
}));

export default function Icons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className='btn-add'>
        <Icon className={classes.iconHover} color="primary" style={{ fontSize: 80 }}>
        <Link to ={{pathname:`/addarticle`}}> add_circle</Link>
        </Icon>
      </div>
     
    </div>
  );
}