import React from 'react';
import './style.css';


function Dob(props) {
    return (
        <button
            className="DOBsearch"
            onClick={() => props.whenClicked(...props.args)}
        >
            {props.text}
        </button>
    );
}

export default Dob;