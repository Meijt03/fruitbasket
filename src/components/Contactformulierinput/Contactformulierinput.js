import React from "react";
import './Contactformulierinput.css';


function Contactformulierinput({inputType,inputId,inputValue,clickHandler}){
    return (
    <input className="contactformulier"
           type={inputType}
           id={inputId}
           value={inputValue}
           onChange={clickHandler}
               />
    );
}



export default Contactformulierinput;