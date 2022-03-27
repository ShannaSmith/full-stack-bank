import './css/styles.css';
import {Card, Table} from 'react-bootstrap';
import React, {useState} from 'react';
import {HashRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import {UserContext} from './components/UserContext';
import Balance from './components/balance';
import UserContextProvider from './components/UserContext';
import BadBank from './components/BadBank';
import './index.css';
import './App.css';

function App() {
  
  
  const [users, setUsers] = useState([]);
  function addUser(user) {
    let currentUsers = [...users];
    currentUsers.push(user);
    setUsers(currentUsers);
  }
  
  return (
    <HashRouter>
       <UserContext.Provider value={{users, addUser}}></UserContext.Provider>
      <NavBar/>
      <UserContextProvider>
        <div className="container" style={{padding: "20px"}}>
          <Route path='/' exact={true} component={BadBank} />
          <Route path='/home/' component={Home}/>
          <Route path='/BadBank/' component={BadBank}/>
          <Route path='/CreateAccount/' component={CreateAccount}/> 
      {/* <Route path="/login/" component={Login} />*/}
          <Route path='/deposit/' component={Deposit} />
          <Route path="/Withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/AllData/" component={AllData} />        
        </div>                  
      </UserContextProvider>     
    </HashRouter>
  )
}

  export default App;

