import React, { useContext, useState } from "react";
import {AuthContext} from './AuthContext';
export default function Login(){
    const [username,set_username] = useState('');
    const [password,set_password] = useState('');
    const [error,set_error] = useState('');
    const { login } = useContext(AuthContext);
    const handleclick = (e)=>{
        e.preventDefault();
        if(login(username,password)){
            set_error('');
        }
        else{
            set_error('INVALID USERNAME OR PASSWORD');
        }
    }
    return(
        <div style={{margin:"200px"}}>
            <div className="card" style={{border:"1px solid black",borderRadius:'10px'}}>
                <div className="card-header">
                    <center>LOGIN</center>
                </div>
                <form className="card-body">
                    <label>Username</label> 
                    <input onChange={(e)=>{set_username(e.target.value)}} value={username} style={{marginLeft:"10px"}}type="text"/>
                    <button style={{marginLeft:'200px'}} className="btn btn-primary" type="button" onClick={handleclick}>Login</button>
                    <label style={{marginLeft:"150px"}}>Password</label> 
                    <input onChange={(e)=>{set_password(e.target.value)}} value={password} style={{marginLeft:"10px"}}type="password"/>
                </form>
                <div>{error}</div>
            </div>
        </div>
    )
}