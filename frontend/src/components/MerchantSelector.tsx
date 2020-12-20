import React, {useContext, useState} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MerchantDetail from './MerchantInfo';
import AddTransactionDialog from './AddTransactionDialog';
import {MerchantsContext, SelectedMerchantIndexContext} from '../context';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    root:{
      marginLeft: '20px'
    },
    addButton:{
      marginTop: '20px'
    }
  }),
);


export default function MerchantSelector() {
  const classes = useStyles();
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [merchants,] = useContext(MerchantsContext);
  const [selectedMerchantIndex, setSelectedMerchantIndex] = useContext(SelectedMerchantIndexContext);

  const handleSelectorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedMerchantIndex(event.target.value as number);
  };

  const handleSelectorClose = () => {
    setSelectorOpen(false);
  };

  const handleSelectorOpen = () => {
    setSelectorOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="h6" >
              Please select a merchant:
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              open={selectorOpen}
              onClose={handleSelectorClose}
              onOpen={handleSelectorOpen}
              value={selectedMerchantIndex}
              onChange={handleSelectorChange}
              fullWidth
            >
              <MenuItem value={-1}>
                <em>None</em>
              </MenuItem>
              {
                merchants.map(
                  (merchant, index) => {
                    return <MenuItem value={index} key={merchant.id}>{merchant.name}</MenuItem>
                  }
                )
              }
            </Select>
          </FormControl>
        </Grid>  
      {
        selectedMerchantIndex>=0 && merchants &&
        <Grid item>
          <MerchantDetail merchant={merchants[selectedMerchantIndex]}/>
          <Button variant="contained" 
            color="primary" 
            className={classes.addButton}
            onClick={handleDialogOpen}
          >
            Add Transaction
          </Button>
          <AddTransactionDialog 
            merchant={merchants[selectedMerchantIndex]} 
            open={dialogOpen} 
            handleClose={handleDialogClose} 
          />
        </Grid>
      }
    </Grid>
  );
}
