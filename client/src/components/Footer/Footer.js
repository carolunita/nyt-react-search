// Import React
import React from 'react';

// Import UI components from reactstrap framework
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

// Import the Container component. 
import Container from "../../components/Container";

// Import css
import './Footer.css';

// Footer component
const Footer = (props) => {
    return (
        <div className="footer">
            <Container >
                <Card>
                    <CardBody>
                        <CardTitle className="footer-heading">
                            New York Times React Search
                        </CardTitle>
                        <CardText className="copy-right"><b>Copyright &copy; 2018</b></CardText>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

// Export Footer component
export default Footer;