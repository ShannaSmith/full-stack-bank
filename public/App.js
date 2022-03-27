import React from 'react'
import {HashRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/home';
import CreateAccount from './components/CreateAccount'
import UserContextProvider from './components/UserContext'
import Deposit from './components/Deposit'
import './App.css'

function App() {
  
  return (
    <HashRouter>
      <NavBar/>
      <UserContextProvider>
        <div className="container" style={{padding: "20px"}}>
         
          <Route path='/home/' component={Home}/>
          <Route path='/CreateAccount/' component={CreateAccount}/> 
      {/* <Route path="/login/" component={Login} />*/}
          <Route path='/deposit/' component={Deposit} />
         {/* <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
  <Route path="/alldata/" component={AllData} />*/}        
        </div>                  
      </UserContextProvider>     
    </HashRouter>
  )
}

  export default App;

