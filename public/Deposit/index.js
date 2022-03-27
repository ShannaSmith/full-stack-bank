import React from 'react';
import UserContextProvider from '../UserContext';
import Card from '../card';
import {useContext, useState} from 'react';
import { getSuggestedQuery } from '@testing-library/react';
import { userSetter } from 'core-js/fn/symbol';
const Deposit = () => {
  const [show, setShow]                         = React.useState(true);
  const [status, setStatus]                     = React.useState('');
  const [depositAmount, setDepositAmount]       = React.useState('');
  
   const UserContext = useContext(UserContextProvider);
  // const startingBalance = user ? getUser(userContext,user).balance : 0.00;
   const [balance, setBalance]                   = React.useState(0.00);
  
   const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(depositAmount);
    if (!validate(depositAmount,'deposit'))    return;
    
    ctx.users.push({depositAmount,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setDepositAmount('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={ 
              <>
             <br/>
              Balance<br/>
              <output className="form-control" id="balance" name="Balance" value={{100 : {balance}}} onChange={e => setBalance(e.currentTarget.value)}/><br/>
              Deposit <br/>
              <input type="number" className="form-control" id="deposit" placeholder="Deposit Amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
      
                 
            }
            />
  );
   
}

export default Deposit;
