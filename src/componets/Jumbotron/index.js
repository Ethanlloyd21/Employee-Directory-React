import React from 'React';
import './index.css';

function Jumbotron() {
    return (
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Employee Directory</h1>
                    <p class="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
                </div>
            </div>
        </header>
    );
}

export default Jumbotron;