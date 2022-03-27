import React from 'react';
import Deposit from '../Deposit';

export const UserContext = React.createContext(null)

const UserContextProvider = ({ children })=> {
    
  return (
    <UserContext.Provider
      value={{
        users: [
          {
            name:'abel',
            email:'abel@mit.edu',
            password:'secret',
            balance:100,
          },
         ],
         signedInUser: 'abel',
       }}
    >
   
      {children} 
    </UserContext.Provider> 
   )
};
export default UserContextProvider;

