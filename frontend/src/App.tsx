
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard/DashBoard'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<DashBoard/>}/>
     </Routes>
    </>
  )
}

export default App
