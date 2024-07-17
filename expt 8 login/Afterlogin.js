import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
export default function Afterlogin(){
    const { logout } = useContext(AuthContext);
    return(
        <div>
            <div>Welcome</div>
            <button onClick={logout} className="btn btn-danger">Logout</button>
        </div>
    )
}