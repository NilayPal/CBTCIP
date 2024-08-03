import React,{useState} from 'react'
import Navbar from '../../Components/Layout/Navbar'
import Footer from '../../Components/Layout/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../Context/Auth'
import "../../Css/Register.css"

const Login = () => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] =useAuth();
  const navigate = useNavigate();
 

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:8000/api/v1/auth/login', {
          email, 
          password,
        });
        if (res && res.data.success) {
          alert('User Login succesfully')
         // toast.success(res.data.message);
         setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
         });
         localStorage.setItem('auth',JSON.stringify(res.data))
          navigate('/');
        } else {
          // toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        // toast.error('Something went wrong from catch part');
      }
    };




  return (
    <div>
    <Navbar/>
    <div className="form-container">
       
       <form onSubmit={handleSubmit}>
       <h1 className="title">Login Form</h1>
        
         <div className="mb-3">
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="form-control"
             placeholder="Enter your Email"
             required
           />
         </div>
         <div className="mb-3">
           <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="form-control"
             placeholder="Enter your Password"
             required
           />
         </div>
        

         <button type="submit" className="btn btn-primary">
           Login
         </button>
       </form>
     </div>

      <Footer/>
    </div>
  )
}

export default Login
