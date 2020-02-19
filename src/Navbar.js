import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from './datatonic-logo-03.svg';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label={<img src={logo} />} disabled/>

        <Tab label="Dashboard" />
        <Tab label="Sources"  />
        <Tab label="Inspector" />
        <Tab label="Ingestion" />
      </Tabs>
    </Paper>
  );
}