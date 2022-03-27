import React from 'react'
import Card from '../card'
const BadBank = () => {
    return (
        <Card
          txtcolor="white"
          bgcolor="primary"
          header="Bad Bank"
          title="Liaise Fare Banking"
          text="Welcome to Bad Bank! Open an account with Bad Bank today and receive $100.00 deposited into your new account!."
          body={(<img src="bank.png" className="img-fluid" alt="bank logo"/>)}
        />    
      );  
    }
   export default BadBank;