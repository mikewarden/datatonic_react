import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from './datatonic-logo-03.svg';
import { makeStyles } from '@material-ui/core/styles';
import NavDropDown from './NavDropDown.js';


const useStyles = makeStyles({
  root: {
    flexGrow: 0,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs id="navbar"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={<img src={logo} />} disabled/>

        <Tab label="Dashboard" />
        <Tab label="Sources"  />
        <Tab label="Inspector" />
        <Tab label="Ingestion" />
        <Tab disabled/>
        <Tab disabled/>
        <NavDropDown />
      </Tabs>
    </Paper>
  );
}