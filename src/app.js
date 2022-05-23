import React, { useReducer } from "react";
import { Routes , Route } from 'react-router-dom';
import Users from "./routers/users/index";

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
    </Routes>
  )
}