import { NavLink , useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register(){

    // create navigate
    const navigate = useNavigate();

    // create states
    const [user, setUser] = useState({
        firstName : '',
        lastName : '',
        gender : '',
        role : 'مهمان',
        phone : '',
        email : ''
    });

    // create handlers
    const addUserHandler = async (e) => {
        e.preventDefault();
        let res = await axios.post('https://6285fb066b6c317d5ba78756.endapi.io/users',{
            firstName:user.firstName,
            lastName:user.lastName,
            gender:user.gender,
            role:user.role,
            phone:user.phone,
            email:user.email,
            password:'123456789'
        });
        sessionStorage.setItem("authApp", 'true');
        navigate('/');
    }

    // create chenge input in add user form
    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    return(
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">عضو شوید</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={addUserHandler}>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            نام
                        </label>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeInput}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            نام خانوادگی
                        </label>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeInput}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            جنسیت
                        </label>
                        <select
                            required
                            name="gender"
                            onChange={changeInput}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option>...</option>
                            <option>مرد</option>
                            <option>زن</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            شماره
                        </label>
                        <input
                            required
                            type="text"
                            name="phone"
                            onChange={changeInput}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                            ایمیل
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeInput}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="text-sm  my-4">
                        <NavLink to="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            قبلا عضو شدم, میخوام وارد شم
                        </NavLink>
                        </div>

                    <div>
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        عضویت
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}