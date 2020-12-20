import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dinero from 'dinero.js';
import { format } from 'date-fns'
import { TransactionType } from '../../../../types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom : '10px'
  },
  title: {
    fontSize: 14,
  }
});

type TransactionProps = {
    transaction: TransactionType,
    currency: string
}

export default function Transaction(props: TransactionProps) {
  const classes = useStyles();
  const {transaction, currency} = props;

  return (
    <Card className={classes.root} variant="outlined" key={transaction.id}>
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          {`Description : ${transaction.description}`}
        </Typography>
        <Typography variant="body2" color="secondary">
            {  `Amount : ${ Dinero({ amount: transaction.amount, 
                currency : currency.slice(0,3) as Dinero.Currency,  
            }).toFormat('$0,0.00')}`    }
        </Typography>
        <Typography variant="body2" color="textPrimary" >
            { `Customer ID : ${transaction.customerId}` }
        </Typography>
        {
          transaction.customerName &&
          <Typography variant="body2" color="textPrimary" >
            { `Customer Name : ${transaction.customerName}` }
          </Typography>
        }
        <Typography variant="subtitle2" color="textSecondary">
            { `Transaction time : ${format(new Date(transaction.date), "yyyy-MM-dd' 'HH:mm:ss")}` }
        </Typography>
      </CardContent>
    </Card>
  );
}
