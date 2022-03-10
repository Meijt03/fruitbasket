import React from "react";
import './Aardbei.css';


function Aardbei({buttonType,buttonDisabled,children,clickHandler}) {
    return (
        <button className= "buttonOne"
            type={buttonType}
            disabled={buttonDisabled}
            onClick={clickHandler}>
            {children}
        </button>

    )
}


export default Aardbei;