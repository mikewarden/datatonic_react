import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AsideList() {
  const classes = useStyles();

  return (
    <List id="aside_list"className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <ErrorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Security Threat" secondary="3 hours ago" />
      </ListItem>
      <h6 className="aside_text">Augue veniam mandamus eu his. Et habemus explicari eum</h6>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <NotificationsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="New Sensitive Data" secondary="3 hours ago" />
      </ListItem>
       <h6 className="aside_text">Lorem ipsum dolor sit amet, pri te oportere reprehendunt. </h6>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
             <InfoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="New Sensitive Data" secondary="3 hours ago" />
      </ListItem>
       <h6 className="aside_text">sit eu ancillae constituto. </h6>
    </List>
  );
}
