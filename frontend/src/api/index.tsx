import Axios from 'axios';

const API_ROOT = "http://localhost:8000"

const axios = Axios.create({
  baseURL: API_ROOT,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export function getAllCustomers(){
    return axios.get(`/customers`)
      .then( 
        (response) => {
          return response.data
        }
      );
}

export function getMerchantById (id: string){
  return axios.get(`/merchants/${id}`)
    .then( (response) => response.data)
}


export function getAllMerchants(){
    return axios.get(`/merchants`)
      .then( (response) => response.data);
}

export function addTransaction(
  merchantId: string, 
  customerId: string, 
  description: string, 
  amount: number
  ){
  
  const request = {customerId, description, amount};
  return axios.post(`/merchants/${merchantId}`, request)
      .then( (response) => response.data);
}

export function createCustomer(name: string, merchantId: string){
  const request = {
    name,
    merchantId
  }
  return axios.post(`/customers`, request)
    .then( (response) => response.data);
}