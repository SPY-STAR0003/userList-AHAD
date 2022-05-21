import Users from "./components/users";

// import Contexts
import UserListContext from './contexts/userListContext'

export default function App () {
  return (
    <UserListContext.Provider value={null}>
      <Users />
    </UserListContext.Provider>
  )
}