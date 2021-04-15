import "./notes.css"
import { Component } from 'react';

class Notes extends Component{

  fifty=()=>{
    //redux
  }

  twenty=()=>{
    //redux
  }

  render() {
    return (
      <>
      <img className="paper-money" style={{left:"4vw",top:"30vh"}} src="https://cdn.shortpixel.ai/client2/q_lossless,ret_img,w_563,h_243/https://www.papermoneywanted.com/images/2009-fifty-dollar-federal-reserve-notes.png" alt="fifty dollars" onClick={this.fifty}/>
      <img className="paper-money" style={{left:"4vw",top:"42vh"}} src="https://www.silverrecyclers.com/uploads/blog-images/1999-20-dollar-bill.jpg" alt="twenty dollars" onClick={this.twenty}/>
      </>
    );
  }
}

export default Notes;
