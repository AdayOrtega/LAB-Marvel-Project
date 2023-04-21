import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import {userState} from 'react'
import { UserContext } from './Context/userContext'

function App() {

  /* const [user, setUser] = userState({})
  const obj = {user, setUser} */

  return (
    <div className="App">
 
      <RouterProvider router={router} />

    </div>
  )
}

export default App
