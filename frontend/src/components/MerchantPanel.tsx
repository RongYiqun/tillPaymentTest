import {useState, useEffect} from 'react';
import {RouteComponentProps } from "@reach/router"
import MerchantTranscationList from './MerchantTransactionList';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MerchantSelector from './MerchantSelector';
import {MerchantType} from '../../../types';
import {MerchantsContext, SelectedMerchantIndexContext} from '../context';
import {getAllMerchants} from '../api';

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



export default function MechantPanel(props: RouteComponentProps){
  const classes = useStyles();
  const [merchants, setMerchants] = useState<MerchantType[]>([]);
  const [selectedMerchantIndex, setSelectedMerchantIndex] = useState<number>(-1);

  useEffect( () => {
    const fetchMerchant = async () => {
      const merchants = await getAllMerchants();
      setMerchants(merchants as MerchantType[]);
    }
    fetchMerchant();
  }, [])


  return(
    <MerchantsContext.Provider value={[merchants, setMerchants]}> 
      <SelectedMerchantIndexContext.Provider value={[selectedMerchantIndex, setSelectedMerchantIndex]}>          
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={6}>
              <MerchantSelector/>
            </Grid>
            <Grid item xs={6}>
              <MerchantTranscationList/>
            </Grid>
          </Grid>
      </SelectedMerchantIndexContext.Provider>
    </MerchantsContext.Provider>
  )
}