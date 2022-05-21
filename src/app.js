import React, { useReducer } from "react";
import Users from "./components/users";

// import Contexts
import UserListContext from './contexts/userListContext'

// import Reduces
import AppReducer from "./reducers/appReducer";

export default function App () {
  return (
    <UserListContext.Provider value={null}>
      <Users />
    </UserListContext.Provider>
  )
}