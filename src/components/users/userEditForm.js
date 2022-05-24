import axios from "axios";
import React,{ useContext } from "react";
import ModalContext from "../../contexts/modalContext";
import UserListContext from "../../contexts/userListContext";

export default function UserEditForm(){

    let { setUserList , setTargetUser , targetUser , fetchAllUserHandler } = useContext(UserListContext)
    let { setShowEditModal , setShowLoading } = useContext(ModalContext)

    // create handlers
    const editUserHandler = async (e) => {
        e.preventDefault();
        let res = await axios.put(`https://6285fb066b6c317d5ba78756.endapi.io/users/${targetUser.id}`,{
            firstName:targetUser.firstName,
            lastName:targetUser.lastName,
            gender:targetUser.gender,
            role:targetUser.role,
            phone:targetUser.phone,
            email:targetUser.email,
            password:'123456789'
        });
        setShowEditModal(false)
        fetchAllUserHandler()
    }

    // create chenge input in edit form user
    const changeInput = (e) => {
        setTargetUser({
            ...targetUser,
            [e.target.name] : e.target.value
        })
    }

    return(
        <form onSubmit={editUserHandler}>
            <div className="mt-3">
                <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                    نام
                </label>
                <input
                    type="text"
                    name="firstName"
                    onChange={changeInput}
                    value={targetUser.firstName}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-3">
                <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                    نام خانوادگی
                </label>
                <input
                    type="text"
                    name="lastName"
                    onChange={changeInput}
                    value={targetUser.lastName}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="flex mt-3">
                <div className="basis-1/2 ml-2">
                    <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                        جنسیت
                    </label>
                    <select
                        name="gender"
                        onChange={changeInput}
                        value={targetUser.gender}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>مرد</option>
                        <option>زن</option>
                    </select>
                </div>
                <div className="basis-1/2 mr-2">
                    <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                        نقش
                    </label>
                    <select
                        name="role"
                        onChange={changeInput}
                        value={targetUser.role}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>مهمان</option>
                        <option>کاربر</option>
                        <option>ادمین</option>
                    </select>
                </div>
            </div>
            <div className="mt-3">
                <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                    شماره
                </label>
                <input
                    type="text"
                    name="phone"
                    onChange={changeInput}
                    value={targetUser.phone}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-3">
                <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                    ایمیل
                </label>
                <input
                    type="email"
                    name="email"
                    onChange={changeInput}
                    value={targetUser.email}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <hr className="my-4"/>
            <div className='sm:w-full flex justify-between mx-auto px-2 mt-3'>
                <button
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                    onClick={() => { setShowEditModal(false) }}
                >
                    بستن
                </button>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 hover:bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                >
                    ذخیره
                </button>
            </div>
        </form>
    )
}