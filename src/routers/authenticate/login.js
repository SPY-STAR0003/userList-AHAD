import axios from "axios";
import { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";

export default function Login(){

    // create navigate
    const navigate = useNavigate();

    // create states
    const [loginInput , setLoginInput] = useState({
        email : '',
        phone : ''
    });

    const chengeLoginInput = (e) => {
        setLoginInput({
            ...loginInput,
            [e.target.name] : e.target.value
        });
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        let email = await axios.get(`https://6285fb066b6c317d5ba78756.endapi.io/users?search=email:${loginInput.email}`);
        let phone = await axios.get(`https://6285fb066b6c317d5ba78756.endapi.io/users?search=phone:${loginInput.phone}`);
        if(email.data.data.length !== 0)
        {
            if(phone.data.data.length !== 0)
            {
                sessionStorage.setItem("authApp", 'true');
                navigate('/')
            }else{
                console.log('incorrect phone',loginInput.phone)
            }
        }else{
            console.log('incorrect email',loginInput.email)
        }
    }

    return(
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">وارد شوید</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={loginHandler}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            ایمیل
                            </label>
                            <div className="mt-1">
                            <input
                                onChange={chengeLoginInput}
                                name="email"
                                type="email"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                رمزعبور
                                (شماره تلفن)
                            </label>
                            <div className="mt-1">
                            <input
                                onChange={chengeLoginInput}
                                name="phone"
                                type="password"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                            <NavLink to="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                عضو نیستم, میخوام ثبت نام کنم
                            </NavLink>
                            </div>
                        </div>

                        <div>
                            <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            ورود
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}