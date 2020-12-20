import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MerchantType } from '../../../types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    marginTop : "10px",
    marginBottom : "10px"
  },
  title: {
    fontSize: 14,
  }
});

type MerchantInfoProps = {
    merchant: MerchantType,
}

export default function MerchantInfo({merchant}: MerchantInfoProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" key={merchant.id}>
      <CardContent>
        <Typography className={classes.title} color="initial">
            {`Merchant ID : ${merchant.id}`}
        </Typography>
        <Typography variant="body2" color="initial">
            {`Name : ${merchant.name}`}
        </Typography>
        <Typography variant="body2" color="initial" >
            {`Currency : ${merchant.currency}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
