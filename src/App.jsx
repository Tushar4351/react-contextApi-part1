import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

import './App.css'

function App() {
 

  return (
    <UserContextProvider>
      <div className="">
      <h1 className="text-white">Hello Everyone</h1>
      <Login />
      <Profile />
      </div>
  

    </UserContextProvider>
  )
}

export default App
