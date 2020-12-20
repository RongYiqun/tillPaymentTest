import React, {Fragment} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Transaction from './Transaction';
import {TransactionType} from '../../../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '2px',
      width: '100%',
      maxHeight: 600,
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto'
    },
    inline: {
      display: 'inline',
    },
  }),
);

type TransactionListProps = {
  transcations : TransactionType[],
  currency : string
}


export default function TransactionList( {transcations, currency} : TransactionListProps ) {
  const classes = useStyles();
    return <List className={classes.root}>
      {
        transcations.map((transaction) =><Fragment key={transaction.id}>
            <Transaction 
              transaction = {transaction} 
              currency = {currency}
            />
          </Fragment>
        )
      }
    </List>
}
