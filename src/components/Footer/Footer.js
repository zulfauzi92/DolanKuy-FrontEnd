import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <hr/>
        <Container fluid={this.props.fluid ? true : false}>
          <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Col md={8} xs={12}>
              <Row>
                <Col md={6} xs={12}>
                  <p>Test</p>
                </Col>
                <Col md={6} xs={12}>
                  <p>Test</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;