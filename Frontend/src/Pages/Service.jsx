import React from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import "../Css/Service.css";

import Weading from "./Weading/Weading";
import { Link } from "react-router-dom";
import Birthday from "./Birthday/Birthday";
import Party from "./Party/Party";

const Service = () => {
  return (
    <>
      <Navbar />

      <div>
        <div
          className="weeding"
          style={{
            marginTop:"20px",
            color: "black",
            backgroundColor: "#fbc2eb",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          WEDDINGS
        </div>
        <Weading /> <br />
        <Link to="/details">
          <button>View More</button> <br/><br/>
        </Link>

          
      </div>
 
   <div>
      <div className="weeding" style={{
            marginTop:"20px",
            color: "black",
            backgroundColor: "#fbc2eb",
            padding: "10px",
            borderRadius: "5px",
          }}> BIRTHDAY
      </div>
      <Birthday/><br/>
      <Link to="/birthdaydetails">
          <button>View More</button> <br/><br/>
        </Link>
    </div> 

          
          
   <div>
      <div className="weeding" style={{
            marginTop:"20px",
            color: "black",
            backgroundColor: "#fbc2eb",
            padding: "10px",
            borderRadius: "5px",
          }}> ORGANIZE PARTY'S & FUNCTIONS
      </div>
      <Party/><br/>
      <Link to="/partydetails">
          <button>View More</button> <br/><br/>
        </Link>
    </div> 

      <Footer />
    </>
  );
};

export default Service;
