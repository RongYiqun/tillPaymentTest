import {RouteComponentProps } from "@reach/router"
import {useState} from "react";
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetails';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { CustomerType} from '../../../types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '40px',
  },
  panel: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export default function CustomerPanel(props: RouteComponentProps){
    const classes = useStyles();
    const [selectedCustomer, setSelectedCustomer] = useState<CustomerType| undefined>();

    return <Grid container spacing={1} className={classes.root}>
        <Grid item xs={6}>
          <CustomerList setSelectedCustomer ={setSelectedCustomer}/>
        </Grid>
        <Grid item xs={6}>
          {selectedCustomer && <CustomerDetail customer = {selectedCustomer} />}
        </Grid>
      </Grid>
}