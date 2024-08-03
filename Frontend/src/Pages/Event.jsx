

import React, { useState } from 'react';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import { useAuth } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Event = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleEnter = () => {
    navigate('/login');
  };

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [maleName, setMaleName] = useState('');
  const [femaleName, setFemaleName] = useState('');
  const [birthdayBoyName, setBirthdayBoyName] = useState('');
  const [option, setOption] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/auth/event', {
        name, email, address, phone, selectedEvent, message, option, maleName, femaleName, birthdayBoyName
      });
      if (res && res.data.success) {
        alert('Your booking has been sent');
      }
    } catch (error) {
      console.log(error);
      console.log('Error in event catch part');
    }
    console.log('Form Data Submitted:', {
      name, email, address, phone, selectedEvent, message, option, maleName, femaleName, birthdayBoyName
    });
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="form">
        <h2>Please fill the Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Want To Book For:</label>
            <select
              name="selectedEvent"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              required
            >
              {/* <option value="">Select Event</option> */}
              <option value="Wedding">Wedding</option>
              <option value="Conference">Conference</option>
              <option value="Birthday">Birthday Party</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={showAdditionalFields}
                onChange={() =>
                  setShowAdditionalFields(!showAdditionalFields)
                }
              />
              Add Food and Invitation Card Details
            </label>
          </div>
          {showAdditionalFields && (
            <>
              <div className="form-group">
                <label>Want Food</label>
                <input
                  type="text"
                  name="option"
                  placeholder="Type (Yes/ No)"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                  required
                />
              </div>
              {selectedEvent === 'Wedding' && (
                <>
                  <div className="form-group">
                    <label>Male Name</label>
                    <input
                      type="text"
                      name="maleName"
                      value={maleName}
                      onChange={(e) => setMaleName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Female Name</label>
                    <input
                      type="text"
                      name="femaleName"
                      value={femaleName}
                      onChange={(e) => setFemaleName(e.target.value)}
                    />
                  </div>
                </>
              )}
              {selectedEvent === 'Birthday' && (
                <div className="form-group">
                  <label>Birthday Boy's Name</label>
                  <input
                    type="text"
                    name="birthdayBoyName"
                    value={birthdayBoyName}
                    onChange={(e) => setBirthdayBoyName(e.target.value)}
                  />
                </div>
              )}
            </>
          )}
          {!auth.user ? (
            <button onClick={handleEnter} type="button">
              Login to Submit
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </form>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Event;

