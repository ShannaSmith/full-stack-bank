import React from 'react';
import {TabList} from './TabList';
const NavBar = () => {
  const handleClick = (e) => {
    let targetEl = e.currentTarget;
    let link = targetEl.getElementsByClassName("nav-link")[0];
    let ActiveLink = Array.from(document.getElementsByClassName("active"));
    ActiveLink.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  };
  const linkAddress = window.location.hash === "" ? "#/" : window.location.hash;
  
  const activePage = {
    home: linkAddress === "#/" ? " active" : "",
    createAccount: linkAddress === "#/CreateAccount/" ? " active" : "",
    login: linkAddress === "#/Login/" ? " active" : "",
    deposit: linkAddress === "#/Deposit/" ? " active" : "",
    withdraw: linkAddress === "#/Withdraw/" ? " active" : "",
    allData: linkAddress === "#/AllData/" ? " active" : "",
  };

    return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark bbnav" >
      <a className="navbar-brand" href="#/BadBank">Bad Bank</a>
      <button className="navbar-toggler btn btn-outline-secondary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

             {TabList.map(function (item, index) {
               return (
                 <li
                   className="nav-item px-4"
                   key={index}
                   onClick={(e) => handleClick(e)}
                   id={index}
                 >
                  <a
                     className={"nav-link" + activePage[item.id]}
                     href={item.url}
                     title={item.title}
                     description={item.desc}
                     data-toggle="tooltip"
                   >
                     {item.desc}
                   </a>
                 </li>
               );
             })}
           </ul>
         </div>
       </nav>
     );
}
       
export default NavBar