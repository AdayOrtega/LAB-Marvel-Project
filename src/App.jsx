import './App.css'
import Root from './Layouts/root'
import { RouterProvider } from 'react-router-dom'
import Loging from './Components/Loging/Loging'
import router from './Router'

function App() {
 

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
