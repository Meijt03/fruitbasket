import React from "react";
import './Button.css';


function Button ({buttonType,buttonDisabled,clickHandler,children}){
    return (
    <button className="send-button"
        type={buttonType}
        disabled={buttonDisabled}
        onClick={clickHandler}>
        {children}
    </button>
    );
}

export default Button;