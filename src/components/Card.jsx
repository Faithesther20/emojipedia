import React from "react";

function Card(props){
   return(
    <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
       {props.emojiName}
      </span>
      <span>{props.title}</span>
    </dt>
    <dd>
      {props.data}
    </dd>
  </div>
   );
   
}
export default Card;