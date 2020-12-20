import React, {useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import {SelectedMerchantIndexContext, MerchantsContext} from '../context';
import TransactionList from './TranscationList';

export default function MerchantTransactionList(){
    const [merchants,] = useContext(MerchantsContext);
    const [selectedMerchantIndex,] = useContext(SelectedMerchantIndexContext);
    if (selectedMerchantIndex >= 0 
        && merchants.length > selectedMerchantIndex 
        && merchants[selectedMerchantIndex]){
            const selectedMerchant = merchants[selectedMerchantIndex];
            console.log("selectedMerchant.transactions", selectedMerchant.transactions)
            return <>
                <Typography variant="h6" >
                    Transactions :
                </Typography>
                <TransactionList 
                        transcations={selectedMerchant.transactions}
                        currency = {selectedMerchant.currency}
                    />
            </>
    }else{
        return null;
    }
}