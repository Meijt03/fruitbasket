import React from "react";
import './Appel.css';

function Appel({buttonType,buttonDisabled,children,clickHandler}) {
    return (
        <button className="buttonThree"
            type={buttonType}
            disabled={buttonDisabled}
            onClick={clickHandler}>
            {children}
        </button>

    )
};


export default Appel;