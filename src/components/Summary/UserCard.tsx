import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useDispatch, useSelector } from "react-redux";
import {RootState} from '../../store/rootReducer'
import Roles from './Roles'
import Permissions from './Permissions'
import Objects from './Objects'

import {User} from '../../store/types';
import { Button } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

type UserCardProps = {
    user: User
}

export default function UserCard({user}: UserCardProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);  
   
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const _handleClickDetails = () => {
    
  }

  const rolesArr: {id:string, name: string}[] = [];
  const permissionsArr: {id:string, name: string}[] = [];
  const objectsArr: {id:string, name: string}[] = [];

  user.roles.forEach((role) => {
    rolesArr.push({id: role.id, name: role.name})
    role.permissions.forEach((permission) => {
        permissionsArr.push({id: permission.id, name: permission.name})
        permission.objects.forEach(item => {
            objectsArr.push({id: item.id, name: item.name})
           })
        })
})

  return (
    <div>
      <h2>User name: {user.name}</h2>
      <h3>User address: {user.address}</h3>
      <Button onClick={_handleClickDetails}>Details</Button>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Roles" {...a11yProps(0)} />
            <Tab label="Permissions" {...a11yProps(1)} />
            <Tab label="Objects" {...a11yProps(2)} />
          </Tabs>
        </AppBar>        
        <TabPanel value={value} index={0}>
          <Roles roles={rolesArr} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Permissions permissions={permissionsArr} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Objects objects={objectsArr} />
        </TabPanel>
      </div>
    </div>
  );
}
