import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import Footer from "../../Components/Layout/Footer";
import Food from "../Food";
import { Link } from 'react-router-dom';


import birthdayImg from "../Images/Birthday.png"
import birthdayImg1 from "../Images/Birthday1.png"


const Birthdaydetails = () => {


  
    const cardData = [
      {
        id: 1,
        title: "Card  1",
        text: "This Coustomized Crad is only for Rs-50 per Card For More details contact us ",
        imgSrc:birthdayImg,
        link: "#",
      },
      {
        id: 2,
        title: "Card  2",
        text: "This Coustomized Crad is only for Rs-45 per Card For More details contact us ",
        imgSrc:birthdayImg1,
        link: "#",
      },
     
      // Add more card objects as needed
    ];
  
    const Card = ({ title, text, imgSrc, link }) => (
      <div className="card" style={{ width: "19rem" }}>
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
         
        </div>
      </div>
    );
  



  return (
    <>
    <div>
     <Navbar/>
      
     <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJpcnRoZGF5JTIwd2l0aCUyMGNha2V8ZW58MHx8MHx8fDA%3D"
          className="image"
        />
       
      </div>

      <div className="weading">
        <h3 className="style"> BIRTHDAY PAKEGES</h3>
        <p>
        '-'_꩜ 𝘦𝘭𝘭𝘦𝘢𝘦𝘷𝘦𝘯𝘵𝘴 𝘰𝘧𝘧𝘦𝘳𝘴 𝘢 𝘷𝘢𝘳𝘪𝘦𝘵𝘺 𝘰𝘧 𝘱𝘢𝘤𝘬𝘢𝘨𝘦𝘴 𝘵𝘰 𝘮𝘦𝘦𝘵 𝘺𝘰𝘶𝘳 𝘴𝘱𝘦𝘤𝘪𝘧𝘪𝘤 𝘣𝘪𝘳𝘵𝘩𝘥𝘢𝘺          𝘱𝘭𝘢𝘯𝘯𝘪𝘯𝘨 𝘯𝘦𝘦𝘥𝘴. 𝘞𝘩𝘪𝘭𝘦 𝘵𝘩𝘦 𝘱𝘢𝘤𝘬𝘢𝘨𝘦𝘴 𝘳𝘢𝘯𝘨𝘦 𝘪𝘯 𝘴𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘰𝘧𝘧𝘦𝘳𝘦𝘥, 𝘦𝘢𝘤𝘩          𝘪𝘯𝘤𝘭𝘶𝘥𝘦𝘴 𝘤𝘰𝘯𝘴𝘶𝘭𝘵𝘪𝘯𝘨 𝘸𝘪𝘵𝘩 𝘢 𝘵𝘦𝘢𝘮 𝘰𝘧 𝘦𝘹𝘱𝘦𝘳𝘵𝘴 𝘸𝘩𝘰 𝘩𝘢𝘷𝘦 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘪𝘯          𝘸𝘦𝘥𝘥𝘪𝘯𝘨 𝘱𝘭𝘢𝘯𝘯𝘪𝘯𝘨. 𝘐𝘧 𝘵𝘩𝘦𝘳𝘦 𝘪𝘴 𝘢 𝘱𝘢𝘤𝘬𝘢𝘨𝘦 𝘵𝘩𝘢𝘵 𝘥𝘰𝘦𝘴𝘯'𝘵 𝘲𝘶𝘪𝘵𝘦 𝘧𝘪𝘵 𝘸𝘩𝘢𝘵          𝘺𝘰𝘶'𝘳𝘦 𝘭𝘰𝘰𝘬𝘪𝘯𝘨 𝘧𝘰𝘳, 𝘱𝘭𝘦𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘶𝘴 𝘧𝘰𝘳 𝘪𝘯𝘥𝘪𝘷𝘪𝘥𝘶𝘢𝘭𝘪𝘻𝘦𝘥 𝘰𝘱𝘵𝘪𝘰𝘯𝘴. ꩜_'-'
        </p>

        <h3 className="heading">DAY OF COORDINATION</h3>
        <p>
          We want you to enjoy your day. This package is designed for clebreting birthday
          that would like to do all the planning themselves, but want a
          professional to help them execute all of their hard work when their beloved
           birthday finally arrives. Your “day of coordinator” will help make
          your day unforgettable and stress free.
        </p>

        <h3 className="heading">FULL EVENT PLANNING</h3>
        <div className="box">
          <p>✅ Initial consultation</p>
          <p>
            ✅ Comprehensive meeting with our in-house designers to get an
            understanding of your vision, style, and design preferences
          </p>
          <p>✅ Accompany you to 2 tastings and 3 site visits</p>
          <p>
            ✅ Design support for all aspects of the event and manage day of for
            a total of 8 hours from planners arrival
          </p>
          <p>
            ✅ Lead coordinator and up to 1-2 assistants for the wedding
            (staffing dependent on guest count)
          </p>
          <p>
            ✅ Thorough vendor details <br />
            💠Calling to confirm details and times of arrival/delivery <br />
            💠 Handle distribution of payment to each vendor
          </p>
          <p>
            ✅Handle clients “final touches,” such as: - Setting out programs,
            Reserved signs, Menu cards, Place cards, Gift Table, Guest book
          </p>
          <p>
            ✅ Assist with direction of guest seating for ceremony and reception
          </p>
          <p>✅ Access to planners wedding day emergency kit</p>
        </div>

        <h3 className="heading">ABOVE AND BEYOND PLANNING PACKAGE</h3>
        <p>
          ✅Help with creating any of the ceremony or reception items
          (invitations, programs, menus, etc.)
        </p>
        <p>
          ✅Lead coordinator and 3 assistants for the wedding (staffing
          dependent on guest count)
        </p>
        <p>✅Help organizing RSVP's</p>

        <Food />

        <h3> Here ar the Sample cards That we provide for Birthday</h3>
        <div className="card-container">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              text={card.text}
              imgSrc={card.imgSrc}
              link={card.link}
            />
          ))}
        </div>
      </div>
      </div>
      <br/>

      <div className="price">
        <button>FULL EVENT PLANNING Rs-500000</button> <br />
        <br />
        <button>
          FULL EVENT PLANNING && ABOVE AND BEYOND PLANNING PACKAGE Rs-900000
        </button>
        <br />
        <br />
      </div>


      <Link to="/event">
        <button>Book the Event</button>
        <br />
        <br />
      </Link>

      <Footer/>
      </>
    
  )
}

export default Birthdaydetails
