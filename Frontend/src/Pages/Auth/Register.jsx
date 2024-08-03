import React,{useState} from 'react'
import Navbar from '../../Components/Layout/Navbar'
import Footer from '../../Components/Layout/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../../Css/Register.css"



const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/auth/register', {
        name,
        email,
        phone,
        password,
        address
      });
      if (res && res.data.success) {
        alert('User Register succesfully')
       // toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong from catch part');
    }
  };


  return (
    <div>
    <Navbar/>
    <div className="form-container">
       
       <form onSubmit={handleSubmit}>
       <h1 className="title">Register Form</h1>
         <div className="mb-3">
           <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             className="form-control"
             placeholder="Enter your Name"
             required
           />
         </div>
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
         <div className="mb-3">
           <input
             type="text"
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
             className="form-control"
             placeholder="Enter your Phone-No"
             required
           />
         </div>
         <div className="mb-3">
           <input
             type="text"
             value={address}
             onChange={(e) => setAddress(e.target.value)}
             className="form-control"
             placeholder="Enter your Address"
             required
           />
         </div>
         <button type="submit" className="btn btn-primary">
           Register
         </button>
       </form>
     </div>
      <Footer/>
    </div>
  )
}

export default Register
