import React from "react";
import "./Card.css";

function Card(props) {

  function formatCardNumber(cardNumber) {
    // Remove any existing spaces or non-digit characters
    const cleanNumber = cardNumber.replace(/\D/g, '');
    
    // Use regular expressions to add spaces every 4 digits
    const formattedNumber = cleanNumber.replace(/(\d{4})/g, '$1 ');
  
    // Trim any leading or trailing spaces
    return formattedNumber.trim();
  }
  
  // Example usage:
  const card = props.cardNumber; // Replace with your card number
  const formattedCardNumber = formatCardNumber(card);
  // console.log(formattedCardNumber); // Output: "1234 5678 9012 3456"
  

  return (
    <div className="card">
      <div className="rect">
        <div className="circle"></div>
        <div className="circle-1"></div>


        <p className="p1">{formattedCardNumber}</p>
        <p className="p2">{props.fullName}</p>

        <p className="p3">{`${props.expMonth}/${props.expYear}`}</p>


      </div>

      <div className="rect2">


        <div className="rect3"></div>
        <div className="rect4">
          <p className="p4">{props.cvc}</p>
          </div>
        {/* Row 1 small lines */}
        <div className="grp_of_small_rect">
          <div className="smallrect-1"></div>
          <div className="verysmallrect-2"></div>
          <div className="verysmallrect-2"></div>
          <div className="verysmallrect-3"></div>
        </div>
        {/* Row 2 small lines */}
        <div className="grp_of_small_rect_2">
          <div className="smallrect-1_2"></div>
          <div className="verysmallrect-2_2"></div>
          <div className="verysmallrect-02_2"></div>
          <div className="verysmallrect-3_2"></div>
        </div>
        {/* Row 2 small lines */}
        <div className="grp_of_small_rect_3">
          <div className="smallrect-1_3"></div>
          <div className="verysmallrect-2_3"></div>
          <div className="verysmallrect-02_3"></div>
          <div className="verysmallrect-3_3"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
