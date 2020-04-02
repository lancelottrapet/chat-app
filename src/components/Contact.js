import React from "react" ;
function Contact ()  {
    const name ="Lancelot";
    const avatar="https://randomuser.me/api/portraits/women/87.jpg";
    const online =true;

    return (
    
    <div className="Contact">
        <img className="avatar"src={avatar}alt=""></img>
        <div className="container">
          <h4 className="name" >{name}</h4>
          <div className="status">
             {online ? <span className="status-online" />:<span className="status-offline"/>  }
             {online? "online" : "offline"}
            
          </div>
         
        </div>
    </div>
    );
  }

  export default Contact;
        