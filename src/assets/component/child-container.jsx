//child-container.jsx
import React from "react";
import Container from "./family-container"; // Container bileşenini içe aktarıyoruz
import "./container.css";

const Main = () => {
  return (
    <div className="main">
        <div className='text'>
<p className="yazi1">Get the most out of your mobile  with the right subscription</p>
<p className="yazi2">All devices come with free delivery or pickup as standard. See information on available shopping options for your location.</p>
</div>
<Container
  messageOne={
    <div>
      <img
        src="https://mobilabonnementpris.no/wp-content/uploads/2021/02/Ice-logo-246x171.jpg"
        alt="Ice Mobile 10GB"
        
      />
      <p className="Ice" style={{position:"relative", right:"45px",top:"35px"}}>Ice Mobile 10GB</p>
      <p className="Medium" style={{position:"relative", right:"65px",top:"25px"}}>Up to 100Mbit/s</p>
      <p className="poppinsb" style={{position:"relative", right:"85px",top:"25px"}}>299,-</p>
      <p className="Medium" style={{position:"relative", right:"24px",bottom:"25px"}}> /month</p>
      <button className="Button" >Add subscription</button>
    </div>
  }
  messageTwo={
    <div>
    <img
      src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9a/a4/43/9aa4433b-90a5-ab53-bb4f-2c119a4785bf/AppIcon-0-1x_U007ephone-0-0-85-220-0.png/1200x600wa.png"
      alt="Telia Mobil 15GB"
      
    />
    <p className="Ice" style={{position:"relative", right:"45px",top:"35px"}}>Telia Mobil 15GB</p>
    <p className="Medium" style={{position:"relative", right:"20px",top:"25px"}}>Unlimited calls, SMS and MMS</p>
    <p className="poppinsb" style={{position:"relative", right:"85px",top:"25px"}}>953,-</p>
    <p className="Medium" style={{position:"relative", right:"24px",bottom:"25px"}}> /month</p>
    <button className="Button" >Add subscription</button>
  </div>
  }
  messageThree={
    <div>
      <img
        src="https://www.thefastmode.com/media/k2/items/src/ab05940dd8312286040f699f609f30ef.jpg?t=20231214_065839"
        alt="Telenor Next Fast"
        
      />
      <p className="Ice" style={{position:"relative", right:"45px",top:"35px"}}>Telenor Next Fast</p>
      <p className="Medium" style={{position:"relative", right:"70px",top:"25px"}}>Up to 100Mbit/s</p>
      <p className="poppinsb" style={{position:"relative", right:"85px",top:"25px"}}>1028,-</p>
      <p className="Medium" style={{position:"relative", right:"24px",bottom:"25px"}}> /month</p>
      <button className="Button" >Add subscription</button>
    </div>
  }
/>
    </div>
    
  );
};

export default Main;
