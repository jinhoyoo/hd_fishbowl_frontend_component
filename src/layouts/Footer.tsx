import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col md={6}>{currentYear} © 건민네 - fishbowl.com</Col>

                    <Col md={6}>
                        <div className="text-md-end footer-links d-none d-md-block">
                            <Link to="#">건민네</Link>
                            <Link to="#">지원</Link>
                            <Link to="#">연락처</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
