import {createContext} from 'react';
import {MerchantType} from '../../../types';

export const MerchantsContext = createContext<[MerchantType[], Function]>([[], ()=>{}]);
export const SelectedMerchantIndexContext = createContext<[number, Function]>([-1, ()=>{}] );
