import React, { useReducer } from "react";
import { Routes , Route } from 'react-router-dom';
import Users from "./routers/users/index";
import Authenticate from "./routers/authenticate/index";
import Login from "./routers/authenticate/login";
import Register from "./routers/authenticate/register";
import NotFound from "./routers/notFound";

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/auth" element={<Authenticate />} >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}