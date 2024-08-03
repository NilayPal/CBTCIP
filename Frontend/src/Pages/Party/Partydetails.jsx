import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import Footer from "../../Components/Layout/Footer";
import Food from "../Food";
import { Link } from 'react-router-dom';


import birthdayImg from "../Images/Anniversaryparty.png"
import birthdayImg1 from "../Images/Dinnerparty.png"


const Partydetails = () => {


   
  
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
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="image"
        />
       
      </div>


      <div className="weading">
        <h3 className="style"> Party Planning by Design+</h3>
        <p>
        '-'_꩜ 𝘠𝘰𝘶 𝘸𝘢𝘯𝘵 𝘢 𝘱𝘢𝘳𝘵𝘺 𝘣𝘶𝘵 𝘯𝘰𝘵 𝘵𝘩𝘦 𝘱𝘭𝘢𝘯𝘯𝘪𝘯𝘨 𝘵𝘩𝘢𝘵 𝘨𝘰𝘦𝘴 𝘸𝘪𝘵𝘩 𝘪𝘵? 𝘗𝘦𝘳𝘧𝘦𝘤𝘵. 𝘞𝘦 𝘬𝘯𝘰𝘸 𝘧𝘪𝘳𝘴𝘵 𝘩𝘢𝘯𝘥 𝘵𝘩𝘢𝘵 𝘱𝘭𝘢𝘯𝘯𝘪𝘯𝘨 𝘢𝘯 𝘦𝘷𝘦𝘯𝘵 𝘰𝘯 𝘺𝘰𝘶𝘳 𝘰𝘸𝘯 𝘤𝘢𝘯 𝘣𝘦 𝘥𝘪𝘧𝘧𝘪𝘤𝘶𝘭𝘵 𝘢𝘯𝘥 𝘦𝘹𝘵𝘳𝘦𝘮𝘦𝘭𝘺 𝘵𝘪𝘮𝘦-𝘤𝘰𝘯𝘴𝘶𝘮𝘪𝘯𝘨. 𝘏𝘢𝘷𝘪𝘯𝘨 𝘢 𝘤𝘦𝘭𝘦𝘣𝘳𝘢𝘵𝘪𝘰𝘯 𝘪𝘴 𝘴𝘶𝘱𝘱𝘰𝘴𝘦𝘥 𝘵𝘰 𝘣𝘦 𝘧𝘶𝘯, 𝘴𝘰 𝘭𝘦𝘢𝘷𝘦 𝘺𝘰𝘶𝘳 𝘴𝘵𝘳𝘦𝘴𝘴 𝘢𝘵 𝘩𝘰𝘮𝘦 𝘢𝘯𝘥 𝘭𝘦𝘵 𝘶𝘴 𝘥𝘰 𝘵𝘩𝘦 𝘸𝘰𝘳𝘬 𝘧𝘰𝘳 𝘺𝘰𝘶!𝘞𝘦 𝘸𝘰𝘳𝘬 𝘸𝘪𝘵𝘩 𝘦𝘢𝘤𝘩 𝘤𝘭𝘪𝘦𝘯𝘵 𝘵𝘰 𝘩𝘦𝘭𝘱 𝘵𝘩𝘦𝘮 𝘥𝘦𝘴𝘪𝘨𝘯 𝘢 𝘤𝘶𝘴𝘵𝘰𝘮 𝘵𝘩𝘦𝘮𝘦, 𝘧𝘪𝘯𝘥 𝘵𝘩𝘦 𝘱𝘦𝘳𝘧𝘦𝘤𝘵 𝘷𝘦𝘯𝘶𝘦, 𝘤𝘰𝘰𝘳𝘥𝘪𝘯𝘢𝘵𝘦 𝘦𝘯𝘵𝘦𝘳𝘵𝘢𝘪𝘯𝘮𝘦𝘯𝘵, 𝘩𝘢𝘯𝘥𝘭𝘦 𝘤𝘢𝘵𝘦𝘳𝘪𝘯𝘨/𝘣𝘢𝘳 𝘴𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘢𝘯𝘥 𝘤𝘶𝘳𝘢𝘵𝘦 𝘵𝘩𝘦 𝘨𝘶𝘦𝘴𝘵 𝘭𝘪𝘴𝘵. 𝘞𝘦 𝘢𝘭𝘴𝘰 𝘰𝘧𝘧𝘦𝘳 𝘥𝘦𝘤𝘰𝘳 𝘢𝘯𝘥 𝘴𝘵𝘺𝘭𝘪𝘯𝘨 𝘴𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘴𝘰 𝘦𝘢𝘤𝘩 𝘦𝘷𝘦𝘯𝘵 𝘤𝘢𝘯 𝘣𝘦 𝘵𝘢𝘪𝘭𝘰𝘳𝘦𝘥 𝘴𝘱𝘦𝘤𝘪𝘧𝘪𝘤 𝘵𝘰 𝘺𝘰𝘶𝘳 𝘵𝘢𝘴𝘵𝘦, 𝘳𝘦𝘴𝘶𝘭𝘵𝘪𝘯𝘨 𝘪𝘯 𝘢 𝘰𝘯𝘤𝘦 𝘪𝘯 𝘢 𝘭𝘪𝘧𝘦𝘵𝘪𝘮𝘦 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦. 𝘦𝘭𝘭𝘦𝘢𝘦𝘷𝘦𝘯𝘵𝘴 𝘤𝘢𝘯 𝘩𝘦𝘭𝘱 𝘺𝘰𝘶 𝘤𝘳𝘦𝘢𝘵𝘦 𝘢 𝘧𝘶𝘯 𝘢𝘯𝘥 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭 𝘦𝘷𝘦𝘯𝘵, 𝘴𝘰 𝘵𝘩𝘦 𝘰𝘯𝘭𝘺 𝘱𝘭𝘢𝘯𝘯𝘪𝘯𝘨 𝘺𝘰𝘶 𝘯𝘦𝘦𝘥 𝘵𝘰 𝘸𝘰𝘳𝘳𝘺 𝘢𝘣𝘰𝘶𝘵 𝘪𝘴 𝘸𝘩𝘢𝘵 𝘵𝘰 𝘸𝘦𝘢𝘳! ꩜_'-'
        </p>

        <h3 className="heading">DAY OF COORDINATION</h3>
        <p>
          We want you to enjoy your day. This package is designed for clebreting parties
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

        <h3> Here ar the Sample cards That we provide for Your Function</h3>
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

export default Partydetails
