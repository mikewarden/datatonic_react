import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './App.css';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NavDropDown(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    props.onInput(event.target.value);
    console.log(event.target.value);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div id="drop-down">
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">User 001 </InputLabel>
        
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
        >
          <MenuItem value="" >
            <em>None</em>
          </MenuItem>
          <MenuItem value={"One"} >1</MenuItem>
          <MenuItem value={"Two"} >2</MenuItem>
          <MenuItem value={"Three"} >3</MenuItem>
          <MenuItem value={"Four"}>4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}