import React from 'react';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#service1">Service 1</a></li>
            <li><a href="#service2">Service 2</a></li>
            <li><a href="#service3">Service 3</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">FB</a>
            <a href="#twitter" className="social-icon">TW</a>
            <a href="#instagram" className="social-icon">IG</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
        
    </div>
  );
};

export default Footer;
