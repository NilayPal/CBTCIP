import React,{useState} from 'react'

import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import axios from 'axios'

const Contact = () => {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/auth/contact', {
        
        email,
        phone,
        message,
      });
      if (res && res.data.success) {
        alert('Message sent succesfully succesfully')
       
       
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
      <div className='form-container'>
      <form onSubmit={handleSubmit}>
      <h1 className="title">Contact Us</h1>
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
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             className="form-control"
             placeholder="Send A message"
             required
           />
         </div>


        <button type="submit">Submit</button>
     
 
    </form>
    </div>
      <Footer/>
    </div>
  )
}

export default Contact
