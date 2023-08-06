import { Toaster } from "react-hot-toast";
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'

function App() {

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster/>
    </>
  )
}

export default App
