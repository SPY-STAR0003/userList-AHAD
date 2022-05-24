import {Outlet, useNavigate, useLocation } from "react-router-dom"
import {useEffect, useState} from "react";

export default function Authenticate(){

    // create value
    const navigate = useNavigate();
    const location = useLocation();

    // create state
    const [ redirect , setRedirect ] = useState(true);

    // for redirect
    let redirectHandler = () => {
        if(location.pathname === '/auth'){
            {
                navigate('/auth/login', { replace: true })
            }
        }
    }

    useEffect(
        redirectHandler
        ,[])

    return(
        <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <Outlet />
        </div>
    )
}
