import React from 'react'
import Card from '../card'
const Home = () => {
    return (
        <Card
          txtcolor="white"
          bgcolor="primary"
          header="Bad Bank"
          title="Liaise Fare Banking"
          text="Banking for the adventurous! Open your free account today and receive $100.00 deposited into your new account!."
          body={(<img src="bank.png" className="img-fluid" alt="bank logo"/>)}
        />    
      );  
    }
   export default Home;
