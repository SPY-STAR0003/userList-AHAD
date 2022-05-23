import { Outlet , useNavigate , useLocation  } from "react-router-dom"

export default function Authenticate(){
    // create value
    const navigatePage = useNavigate();
    const location = useLocation();
    // for redirect
    if(location.pathname == '/auth/'){
        return navigatePage("./login");
    }else{
        return(
            <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        );
    }
}
