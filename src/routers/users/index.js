import React , { useState } from "react";
import UserSearchBox from "./../../components/users/userSearchBox";
import UserList from "./../../components/users/userList";
import Modal from "./../../components/modal";
import UserAdd from "./../../components/users/userAdd";
import UserEdit from "./../../components/users/userEdit";
import LoadingModal from "./../../components/loading";


// import Contexts
import UserListContext from './../../contexts/userListContext'
import ModalContext from './../../contexts/modalContext'

export default function Users (){
    // create states
    const [showModal, setShowModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [userList, setUserList] = useState([]);
    const [targetUser, setTargetUser] = useState({});
    const [search, setSearch] = useState({
        search : '',
        gender : '',
        role : ''
    });

    // create variable
    let finalUserList = userList;

    //create handler
    const getTargetUserHandler = (key) => {
        setShowEditModal(true);
        setTargetUser(userList.find(item => item.key === key));
    }

    const deleteUserHandler = (key) => {
        setUserList(prevState => {
            return finalUserList.filter(item => item.key !== key)
        });
    }

    const searchBoxChengeHandler = (e) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //for search box
    if(finalUserList.length){
        if(search.search.length){
            finalUserList = finalUserList.filter(item => (
                item.firstName.search(search.search) !== -1 ||
                item.lastName.search(search.search) !== -1 ||
                item.phone.search(search.search) !== -1 ||
                item.email.search(search.search) !== -1
            ));
        }
        if(search.role && search.role !== "all"){
            finalUserList = finalUserList.filter(item => item.role === search.role);
        }
        if(search.gender && search.gender !== "all"){
            finalUserList = finalUserList.filter(item => item.gender === search.gender);
        }
    }

    return(
        <ModalContext.Provider value={{
            showModal,
            setShowModal,
            showEditModal,
            setShowEditModal
        }}>
            <UserListContext.Provider value={{
                userList,
                setUserList,
                targetUser,
                setTargetUser
            }}>

                {/*Add loading Component*/}
                <LoadingModal
                    showLoading={showLoading}
                    setShowLoading={setShowLoading}
                />

                <div className='sm:absolute w-full mt-10'>
                    <div className='sm:absolute w-full'>
                        <div className='sm:w-2/5 reletive mx-auto text-center p-9 sm:px-14 sm:py-3 sm:bg-[#f5f7f7] bg-slate-400 border-4 border-violet-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_4px_80px_0px_rgba(0,0,0,0.05)]'>
                            <div className='text-2xl font-bold'>
                                مدیریت کاربران
                            </div>
                        </div>
                    </div>
                    <div className='container sm:w-4/5 w-full mx-auto'>
                        <div className='p-6 sm:px-14 sm:pb-7 sm:pt-12 mt-7 bg-white rounded-lg md:rounded-xl lg:rounded-2xl mb-5 shadow-[0_4px_80px_0px_rgba(0,0,0,0.05)] border-2 border-violet-200'>
                            <div className="sm:flex sm:items-center mb-4">
                                <div className="sm:flex-auto">
                                    <h1 className="text-xl font-semibold text-gray-900">لیست کاربران</h1>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:flex-none">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(true)}
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        کاربر جدید
                                    </button>

                                    {/*Add modal Component*/}
                                    <Modal
                                        showModal={showModal}
                                        setShowModal={setShowModal}
                                    >
                                        {/*send user add form in modal*/}
                                        <UserAdd />
                                    </Modal>

                                    {/*Add Edit modal Component*/}
                                    <Modal
                                        showModal={showEditModal}
                                        setShowModal={setShowEditModal}
                                    >
                                        {/*send user edit form in modal*/}
                                        <UserEdit />
                                    </Modal>

                                </div>
                            </div>

                            {/*Add User Search Box Component*/}
                            <UserSearchBox searchBoxChengeHandler={searchBoxChengeHandler} />

                            {/*Add User List Component*/}
                            <UserList finalUserList={finalUserList} setUserList={setUserList} getTargetUserHandler={getTargetUserHandler} deleteUserHandler={deleteUserHandler} />

                        </div>
                    </div>
                </div>
            </UserListContext.Provider>
        </ModalContext.Provider>
    )
}