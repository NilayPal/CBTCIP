import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import "../Css/Homepage.css";
import Middlepage from './Middlepage';
import Food from './Food';

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      name: "Wedding",
      pal: "May your journey together be filled with endless love, joy, and the magic of a beautiful forever.",
      imageUrl: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Birthday",
      pal:"May your birthday be filled with laughter, love, and all the beautiful moments that make life a true celebration." ,
      imageUrl: "https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Party",
      pal: "Every party is a chance to dance to the rhythm of life, celebrate the joy of togetherness, and create unforgettable memories",
      imageUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      name: "Anniversary",
      pal:"May the love you share grow stronger as you celebrate another year together, creating countless cherished memories alongtheway" ,
      imageUrl: "https://images.pexels.com/photos/2072175/pexels-photo-2072175.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <>
      <Navbar/>
  
      <div className='container'>
        <div className='slide'>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`item ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url("${item.imageUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: index === currentIndex ? 'block' : 'none'
              }}
            >
              <div className='content'>
                <div className='name'>{item.name}</div>
                <div className='pal'>{item.pal}</div>
                {/* <button>See More</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Middlepage />
      <Footer />
    </>
  );
}

export default Homepage;
