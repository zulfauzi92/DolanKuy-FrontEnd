import React from "react";
import {
  Container,
  Row,
  Col,
  NavItem,
  NavLink
} from "reactstrap";
import{
  Link
} from 'react-router-dom';
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
                <Col md={2} xs={4}>
                  <img style={{width: '100%'}}
                    src={require("assets/img/Dolankuylogo.png")}
                  />
                </Col>
                <Col md={5} xs={12} style={{paddingTop:"30px"}}>
                  <p>
                    DolanKuy adalah Aplikasi referensi wisata yang ada di Indonesia, berbasis 3 platform yaitu mobile, website dan desktop.
                  </p>
                </Col>
                <Col md={2} xs={12} style={{paddingTop:"10px"}}>
                  <Link to="/layouts/listwisata">
                      <NavLink style={{fontWeight:"800"}}>
                          Lokasi Wisata
                      </NavLink>
                  </Link>
                  <Link to="/layouts/akomodasi">
                      <NavLink style={{fontWeight:"800"}}>
                          Lokasi Akomodasi
                      </NavLink>
                  </Link>
                </Col>
                <Col md={3} xs={12} style={{paddingTop:"10px"}}>
                  <Link to="/layouts/aboutus">
                      <NavLink style={{fontWeight:"800"}}>
                          Tentang Kami
                      </NavLink>
                  </Link>
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