import React, { useEffect } from 'react';
import UserContextProvider from '../UserContext';
import Card from '../card';
import CreateAccount, {balance} from '../CreateAccount';
import {UserContext} from '../UserContext';
import {useContext, useState} from 'react';
import { getSuggestedQuery } from '@testing-library/react';
import { userSetter } from 'core-js/fn/symbol';
import TransactionForm from "../transactionForm";
  
  
const Withdraw = () =>{
    const ctx = React.useContext(UserContext);
    const [show, setShow]             = React.useState(true);
    const [validTransaction, setValidTransaction] = React.useState(false);
    const [total, setTotal] = React.useState(ctx.users[0].balance);
    const [withdrawalAmount, setWithdrawalAmount] = React.useState(0);
    const [status, setStatus] = React.useState("");
    const [isSuccess, setIsSuccess] = React.useState(false);
    const validateWithdraw = (e) => {
      let amount = e.target.value;
      //console.log("event: " + amount);
      if (amount !== "" && (Number(amount) <= 0 || amount === "-")) {
        setStatus("Error: Invalid amount");
        setIsSuccess(false);
        return setValidTransaction(false);
      }
  
      if (amount !== "" && amount !== "-" && !Number(amount)) {
        setStatus("Error: Please introduce numbers only");
        setIsSuccess(false);
        return setValidTransaction(false);
      }
  
      if (amount === "") {
        return setValidTransaction(false);
      }
  
      //setStatus("");
      setValidTransaction(true);
      setWithdrawalAmount(Number(amount));
    };
  
    useEffect(() => {
      //(`Called useEffect Withdraw`);
      let mounted = true;
      if (status !== "") {
        //console.log(`Called useEffect`);
        setTimeout(() => {
          if (mounted) setStatus("");
        }, 3000);
      }
  
      return () => mounted = false;
    });
    const clearForm = (e) =>{
    setWithdrawalAmount('');
     setShow(true);        
     }
    const handleSubmit = (e) => {
      let newTotal = total - withdrawalAmount;
      if (withdrawalAmount > total) {
        let newTotal = total;
        setStatus(
          `Error: You cannot withdraw more than ${newTotal.toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "USD",
            }
          )}`
        );
        setIsSuccess(false);
        return setValidTransaction(false);
      }
  
      setTotal(newTotal);
      setValidTransaction(false);
      updateCustomerBalance(newTotal);
      setIsSuccess(true);
      setStatus("Success: Your withdrawal transaction is successfully completed!");
      e.preventDefault();
      setShow(false);
    };
  
    /* function that updates the total balance*/
    function updateCustomerBalance(newTotal) {
      ctx.users[0].balance = newTotal;
      setShow(false);
    }
  
    const customerWithdrawal = (
      <TransactionForm
        label="Withdraw"
        total={total}
        validateTransaction={validateWithdraw}
        handleSubmit={handleSubmit}
        validTransaction={validTransaction}
      />
    );
      
    return (
        <>
        <Card
         bgcolor="primary"
          header="Withdraw"
          className="card brand-centered brand-margin-top"
          maxWidth="18rem"
          status={status}
          successFlag={isSuccess}
          body={customerWithdrawal}
                 />
              
               </>
                   
 );  
}

  
 export default Withdraw;