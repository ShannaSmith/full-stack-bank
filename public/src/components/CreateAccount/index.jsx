import React, {useEffect} from 'react';
import {UserContext} from '../UserContext';
import Card from '../card';
import { getOwnPropertySymbols } from 'core-js/core/object';

const CreateAccount = () => {
    const [show, setShow]             = React.useState(true);
    const [status, setStatus]         = React.useState('');
    const [name, setName]             = React.useState('');
    const [email, setEmail]           = React.useState('');
    const [password, setPassword]     = React.useState('');
    const [total, setTotal]       = React.useState(100);
    const ctx = React.useContext(UserContext);

function validate(field, label){
    let errorMessage = "";
    //vaildate all fields have data entered
       if (!field) {
        errorMessage = `Error:  ${label} is required`;
        setStatus(errorMessage);
        setTimeout(() => setStatus(''),3000);
        return false;
    }
    //vaildate password
    if (label === 'password' && field.length < 8) {
        errorMessage = 'Error: Password must contain at least 8 characters';
        setStatus(errorMessage);
        return false;
    }
    console.log(`field: ${field}`);
    console.log(`label: ${label}`);
    setStatus("");
    return true;
}

useEffect(() => {
    let isMounted = true;
    if (status !== "") {
      //console.log(`Called useEffect Create Account`);
      setTimeout(() => {
        if (isMounted) setStatus("");
      }, 3000);
    }

    return () => isMounted = false;
  },[status]);


function handleCreate(){
    
    console.log(name,email,password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    
    ctx.users.push({name,email,password});
   setShow(false);
}


    function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setTotal(100);

   }

    return(
        <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (
               <>
               Name<br/>
                <input type="input"className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
               Email address<br/>
               <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
               Password
               <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
               <button type="submit" disabled={!email && !password && !name} className="btn btn-outline-dark" value="submit" onClick={handleCreate}> Submit</button>
               </>
           ) : (
               <>
               <h5>Success</h5>
               <button type="submit" disabled={!email && !password && !name} className="btn btn-outline-dark" value="submit" onClick= {clearForm}>Add another account</button>
               </>
        )}



        />
    );
}
export default CreateAccount;