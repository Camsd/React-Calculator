import React from "react";
import '../stylesheet/ButtonClear.css';

const ButtonClear = (props) => (
    <div
    className="clear-button"
    onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ButtonClear;