import React from "react";
import './Messagebox.css';

function Messagebox ({messageBoxId,messageBoxName,messageBoxRows,messageBoxCols,messageBoxValue,clickHandler}) {
    return (
        <textarea
            id={messageBoxId}
            name={messageBoxName}
            rows={messageBoxRows}
            cols={messageBoxCols}
            value={messageBoxValue}
            onChange={clickHandler}>

        </textarea>

    );
}

export default Messagebox;