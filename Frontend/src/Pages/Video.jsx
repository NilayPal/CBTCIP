import React, { useState, useEffect } from 'react';


const Video = () => {
  // Image URLs for the slider
  const images = [
    'https://images.unsplash.com/photo-1613324449638-25b8e9b0ec2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmlkZW8lMjBHcmFwaHl8ZW58MHx8MHx8fDA%3D',
    
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="about-topic-container">
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt="Slider" />
      </div>
      <h1 className="about-heading">VIDEO PRODUCTION</h1>
      <p className="about-content">
      We aren’t just an events company anymore, we are proud to launch a huge new arm of our company... EAE Productions. <br/>
      Led by Emmy Winning Director, Ken Fay, our video production team can handle any of your media needs.  From capturing your event in HD and all it’s glory, to shooting that commercial you’ve always wanted but never knew could figure out what was missing to make it happen.  That’s where EAE Productions comes in.  <br/>
      We are a one stop shop for all media production needs.  There is no video too small; from social media videos to even that big movie idea you have, we can handle it all.   Call us today for a full service quote!
      </p>
    </div>
  );
};

export default Video;
