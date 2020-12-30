import React from "react";
import { Container } from "reactstrap";
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
        <div class="row">
            <div class="col-md-6 p-3">
              <div class="footer-widget-heading">
                <h4>Fox Maya</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div class="footer-social-icon">
                  <div class="social-title">Follow us:</div>
                  <a href="https://www.facebook.com/foxmayaban/"><i class="fab fa-facebook-f circle-icon"></i></a>
                  <a href="https://www.instagram.com/foxmayadigital/"><i class="fab fa-instagram circle-icon"></i></a>
                  <a href="https://twitter.com/foxmayadigital"><i class="fab fa-twitter circle-icon"></i></a>
                  <a href="https://www.linkedin.com/in/ban-sharma/"><i class="fab fa-linkedin-in circle-icon"></i></a>
              </div>
            </div>
            <div class="col-md-6 p-3">
              <div class="footer-widget-heading">
                <h4>Quick Links</h4>
              </div>
              <ul class="linkediting">
                  <li><a href="#"><i class="fa fa-angle-right"></i> About Us</a></li>
                  <li><a href="#"><i class="fa fa-angle-right"></i> Contact Us</a></li>
                  <li><a href="#"><i class="fa fa-angle-right"></i> My Portfolio</a></li>
                  <li><a href="#"><i class="fa fa-angle-right"></i> Testimonials</a></li>
              </ul>
            </div>
          </div>
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