import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {ListItem}from '@material-ui/core';
import {getAllCustomers} from '../api';
import {CustomerType} from '../../../types';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginLeft: "20px"
    },
    list: {
      maxHeight: 500, 
      overflow: 'auto' 
    },
    header: {
      marginLeft: '40px'
    }
  }),
);


type CustomerListProps = {
  setSelectedCustomer : Function
}

export default function CustomerList({setSelectedCustomer} : CustomerListProps) {
  const [customers, setCustomers] = useState<CustomerType[]>();
  const classes = useStyles();

  useEffect(()=>{
    const fetchCustomers = async () => {
      const current_customers = await getAllCustomers();
      setCustomers(current_customers as CustomerType[]);
    };
    fetchCustomers();
  } ,[])

  return (
    <>
      <Typography variant="h6" className={classes.header}>Customers:</Typography>
      <Card className={classes.root}>
          <CardContent>
              <List component="nav" className={classes.list}>
                {customers?.map((customer) => (
                  <ListItem key={customer.id} button
                    onClick ={ () => setSelectedCustomer(customer) }
                    >
                    <ListItemText primary={customer.name} />
                  </ListItem>
                ))}
              </List>
          </CardContent>
      </Card>
    </>
  );
}
