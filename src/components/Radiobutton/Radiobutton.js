import React from "react";
import './Radiobutton.css'


function Radiobutton({radioButtonInput,radioButtonId,radioButtonName,radioButtonChecked,clickHandler}) {
    return (
        <input
            type={radioButtonInput}
            id={radioButtonId}
            name={radioButtonName}
            checked={radioButtonChecked}
            onChange={clickHandler}/>
    );
}

export default Radiobutton
