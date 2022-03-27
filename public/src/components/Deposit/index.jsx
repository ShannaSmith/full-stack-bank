import React, { useEffect } from 'react';
import Card from '../card';
import {UserContext} from '../UserContext';
import TransactionForm from '../transactionForm';
import { getSuggestedQuery } from '@testing-library/react';
import { userSetter } from 'core-js/fn/symbol';
const Deposit = () => {
  const ctx = React.useContext(UserContext);
  
  const [show, setShow]                         = React.useState(true);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [status, setStatus]                     = React.useState('');
  const [depositAmount, setDepositAmount]       = React.useState('');
  const [total, setTotal]                       = React.useState(100);
  const [isSuccess, setIsSuccess]               = React.useState(false);
  

  const validateDeposit = (e) => {
      let amount = e.target.value;
      console.log('event: ' + amount);
      if (amount !== "" && (Number(amount) <= 0 || amount === "-")) {
        setStatus("Error: Invalid amount");
        setIsSuccess(false);
        return setValidTransaction(false);
      }
      if (amount !== "" && amount !== "-" && !Number(amount)) {
        setStatus("Error: Enter numbers only");
        setIsSuccess(false);
        return setValidTransaction(false);
      }
      if (amount === "") {
        return setValidTransaction(false);
      }
      setValidTransaction(true);
      setDepositAmount(Number(amount));
  };

  useEffect(() => {
    console.log(`called useEffect deposit`);
    let mounted = true;
    if (status != "") {
    setTimeout(() => {
      if (mounted) setStatus("");
        }, 3000);
    }
    return () => mounted = false;
  });

  const clearForm = () =>{
    setDepositAmount('');
    setShow(true);    
   }
  const handleSubmit = (e) => {
    let newTotal = total + depositAmount;
    setTotal(newTotal);
    setValidTransaction(false);
    updateCustomerBalance(newTotal);
    setIsSuccess(true);
    setStatus('Success: Your deposit transaction has been successfully completed!');
    e.preventDefault(); 
    setShow(false);  
   // setTotal(100);
   // setDepositAmount(e.currentTarget.value);
  };
  //Update total deposit balance
  const updateCustomerBalance =(newTotal) => {
    ctx.users[0].balance = newTotal;
    setShow(false)
      }
  const customerDeposit =(
    <TransactionForm
    label="Deposit"
    total={total}
    validateTransaction={validateDeposit}
    handleSubmit={handleSubmit}
    validTransaction={validTransaction}
     clearForm={clearForm}
    />
  );  
    
    return (
      <>
    <Card
     bgcolor="primary"
      header="Deposit"
      className="card brand-centered brand-margin-top"
      width="18rem"
      status={status}
      successFlag={isSuccess}
      body={customerDeposit}           
      />              
  </>
      
 );  
}

export default Deposit;
