import {useEffect, useState} from "react"
import {getMerchantById} from '../api'
import TranscationList from './TranscationList';
import { Typography } from '@material-ui/core';
import MerchantInfo from './MerchantInfo';
import Dinero from "dinero.js";
import {CustomerType, MerchantType} from '../../../types';

type CustomerDetailsProps = {
    customer: CustomerType
}

export default function CustomerDetails({customer} : CustomerDetailsProps){
    const [merchant, setMerchant] = useState<MerchantType | undefined>();
    
    useEffect(()=>{
        const fetchCustomerMerchant = async () =>{
            const customerMerchant = await getMerchantById(customer.merchantId);
            setMerchant(customerMerchant as MerchantType);
        }
        fetchCustomerMerchant();
    }, [customer]);
    
    if(merchant){
        const {transactions, currency} = merchant;
        const customerTransactions = 
            transactions.filter( (transaction)=> transaction.customerId === customer.id);
        const totalAmount = customerTransactions.reduce( (acc, transaction) => acc + transaction.amount, 0)
        const formatedAmount = Dinero({ amount: totalAmount, 
                currency : currency.slice(0,3) as Dinero.Currency,  
            }).toFormat('$0,0.00');
        return <>
            <Typography variant="h6" >
                Shop At :
            </Typography>
            <MerchantInfo merchant ={merchant}/>
            <Typography variant="h6" >
                Transactions :
            </Typography>
            <TranscationList transcations ={customerTransactions} currency={currency}/>
            <Typography variant="subtitle1" >
                {`Total amount spent: ${formatedAmount}`}
            </Typography>
        </>
    }else{
        return <h1>Loading customer detail</h1>
    }
}