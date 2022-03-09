import React from "react";
import './Banaan.css';

function Banaan({buttonType,buttonDisabled,children,clickHandler}) {
    return (
        <button className="buttonTwo"
            type={buttonType}
            disabled={buttonDisabled}
            onClick={clickHandler}>
            {children}
        </button>

    )
};


export default Banaan;