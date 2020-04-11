import React from 'react';
import './style.css';

function Container(props) {
    return <div className="container container-main">{props.children}</div>;
}

export default Container;