// Import React
import React from 'react';

// Import the Jumbotron UI component from the reactstrap framework
import { Jumbotron } from 'reactstrap';

// Import Jumbotron style sheet
import './Jumbotron.css';

// Jumbotron component
const NYTJumbotron = (props) => {
    return (
        <div className="header">
            <Jumbotron className="text-center jumbotron">
                <img src={'http://i64.tinypic.com/xl02fk.png'} alt="NYT Logo" className="logo"/>
                <p className="lead">Search, Read, and Annotate New York Times Articles!</p>
            </Jumbotron>
        </div>
    );
};

// Export Jumbotron component
export default NYTJumbotron;