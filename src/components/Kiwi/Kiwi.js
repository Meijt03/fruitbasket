import React from "react";
import './Kiwi.css';

function Kiwi({buttonType,buttonDisabled,children,clickHandler}) {
    return (
        <button className="buttonFour"
            type={buttonType}
            disabled={buttonDisabled}
            onClick={clickHandler}>
            {children}
        </button>

    )
};


export default Kiwi;