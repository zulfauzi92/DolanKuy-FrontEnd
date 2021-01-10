import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { baseURL } from '../Utils/api';
import axios from "axios";

function User() {

  const [profile, setProfile] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`${baseURL}me`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setLoading(false);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <>
      <PanelHeader size="md" />
      <div className="content" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Col md={8} xs={12}>
        <Row>
          <Col md={8}>
          <Card>
              <CardHeader>
                <h5 className="title">Profile Information</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <label>Name</label>
                      <br/>
                      <h6>Your Name</h6>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <label>Email</label>
                      <br/>
                      <h6>Your Email</h6>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          defaultValue="Name"
                          placeholder="Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          defaultValue="Email"
                          placeholder="Email"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          defaultValue="Password"
                          placeholder="Password"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Link id="buttonCard">
                          <Button id="buttonCard" color="primary" block>Save</Button>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                className="avatar border-gray"
                src={require("assets/img/default-avatar.png")}
              />
            </a>
          </Col>
        </Row>
      </Col>
      </div>
    </>
  );
}

export default User;
