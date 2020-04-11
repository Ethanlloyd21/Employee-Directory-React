import React from 'react';
//import { Link } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Topbar() {
    return (
        <div class="jumbotron jumbotron-fluid" id="top">
            <div class="container">
                <h1 class="display-4">Employee Directory</h1>
                <p class="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
                <hr class="my-4"></hr>
                <a class="btn btn-warning btn-lg" href="/" role="button">Refresh</a>

            </div>
        </div>

    );
}

export default Topbar;