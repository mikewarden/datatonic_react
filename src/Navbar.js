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
    <Paper className="nav_labels">
      <Tabs id="navbar"
      className="nav_labels"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab disabled label={<img src={logo} />}/>

        <Tab label={<span id="active_nav" className="nav_labels">Dashboard</span>} />
        <Tab label={<span className="nav_labels">Sources</span>}  />
        <Tab label={<span className="nav_labels">Inspector</span>} />
        <Tab label={<span className="nav_labels">Ingestion</span>} />
        <Tab disabled/>
        <Tab disabled/>
        <Tab label={<NavDropDown />} />
      </Tabs>
    </Paper>
  );
}