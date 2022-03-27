import React from 'react'
import Card from '../card'
const Home = () => {
    return (
        <Card
          txtcolor="white"
          bgcolor="primary"
          header="Bad Bank"
          title="Liaise Fare Banking"
          text="Banking for the adventurer! Open your free account today."
          body={(<img src="bank.png" className="img-fluid" alt="bank logo"/>)}
        />    
      );  
    }
   export default Home;
