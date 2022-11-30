import React from "react";




const CardArea = ({Idarea,onClick}) => {
    return (
   
    <div className="card_area" onClick={onClick}>
        {Idarea}
    </div>

    );
  }


  export default CardArea;