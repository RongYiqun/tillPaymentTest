import React, {useState, useContext}from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {MerchantType} from '../../../types';
import{createCustomer, addTransaction, getAllMerchants} from '../api';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {MerchantsContext} from '../context';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
  }),
);


type AddTransactionDialogProps = {
    merchant : MerchantType
    open : boolean,
    handleClose : Function
}

export default function AddTransactionDialog({merchant,open, handleClose} : AddTransactionDialogProps) {
  const classes = useStyles(); 
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [, setMerchants] = useContext(MerchantsContext);

  
  const handleAddTransaction = async () =>{
    if(description && name){
        const {id} = await createCustomer(name, merchant.id);
        await addTransaction(merchant.id, id, description, amount);
        const newMerchants = await getAllMerchants();
        setMerchants(newMerchants);
        clear();
        handleClose();
    }
  }

  const clear = () => {
    setDescription('');
    setAmount(0);
    setName('');
  };

  return (
      <Dialog open={open} onClose={() => handleClose()} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Transcation</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To add new transaction with new customer, please fill out the following form
            </DialogContentText>
            <TextField
                className={classes.input}
                required
                value = {description}
                label="Description"
                variant="outlined"
                fullWidth
                onChange = {(event) => setDescription(event.target.value)}
            />
            <TextField
                className={classes.input}
                required
                value={amount}
                id="filled-required"
                label="Amount"
                variant="outlined"
                onChange = {(event) => setAmount(+event.target.value)}
            />
            <TextField
                className={classes.input}
                required
                value={name}
                id="filled-required"
                label="New Customer Name"
                variant="outlined"
                onChange = {(event) => setName(event.target.value)}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTransaction} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    )
}
