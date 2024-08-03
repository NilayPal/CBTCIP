
import './App.css'
import {Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Event from './Pages/Event'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Details from './Pages/Weading/Details'
import Birthdaydetails from './Pages/Birthday/Birthdaydetails'
import Partydetails from './Pages/Party/Partydetails'


function App() {
 

  return (
    <>
    <Routes>

     {/* Lgin and Registation */}
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>

      <Route path='/' element={<Homepage/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/event' element={<Event/>}/>


      <Route path='/details' element={<Details/>}/>
      <Route path='/birthdaydetails' element={<Birthdaydetails/>}/>
      <Route path='/partydetails' element={<Partydetails/>}/>
     
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
     
    </>
  )
}

export default App
