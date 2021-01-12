import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  ListGroup, 
  ListGroupItem,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import bg1 from "assets/img/bg4.jpg";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { baseURL } from '../Utils/api';
import axios from "axios";

function Akomodasi(){

  const [listLocation, setListLocation] = React.useState();
  const [galery, setGalery] = React.useState();
  const [distance, setDistance] = React.useState();
  const [search, setSearch] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`${baseURL}acomodation`, { data: { userLong: 1.104, userLat: 1.102 } })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setLoading(false);
        setListLocation(res.data.acomodation);
        setGalery(res.data['gallery']);
        setDistance(res.data['distance']);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    return () => {};
  }, []);

  const onSubmit = () => {
    axios
      .get(`${baseURL}locations/search`, { params: { search }})
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setListLocation(res.data['locations']);
        setGalery(res.data['galery']);
        setDistance(res.data[2]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
              <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <Col md={8} xs={12}>
                      <Row>
                          <Col md={6} xs={12} style={{justifyContent:'center', alignItems:'center', paddingTop: '70px'}}>
                            <h2 className="title" style={{textAlign:"left", paddingBottom:"15px"}}>Cari lokasi akomodasi bersama DolanKuy</h2>
                            <form>
                              <InputGroup className="no-border">
                                <Input placeholder="Cari lokasi Akomodasi" onChange={(e) => setSearch(e.target.value)}/>
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                      <i className="now-ui-icons ui-1_zoom-bold" onClick={onSubmit}/>
                                    </InputGroupText>
                                  </InputGroupAddon>
                              </InputGroup>
                            </form>
                          </Col>
                          <Col md={2} xs={0}/>
                          <Col md={4} xs={12}>
                            <img style={{width: '100%'}}
                                src={require("assets/img/mobil.png")}
                            />
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </div>
        }
      />
      <div className="content">
      <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Col md={8} xs={12}>
          <Row>
            <Col md={3}>
              <Card style={{width: '100%'}}>
                  <ListGroup flush>
                      <ListGroupItem style={{fontWeight: 'bold'}}>Kategori Akomodasi</ListGroupItem>
                      <ListGroupItem tag="a" href="/admin/akomodasi">
                        <i style={{margin:10}} className="now-ui-icons travel_istanbul" />
                        Tempat Ibadah
                      </ListGroupItem>
                      <ListGroupItem tag="a" href="/admin/akomodasi">
                        <i style={{margin:10}} className="now-ui-icons objects_spaceship" />
                        SPBU
                      </ListGroupItem>
                      <ListGroupItem tag="a" href="/admin/akomodasi">
                        <i style={{margin:10}} className="now-ui-icons objects_support-17" />
                        Kuliner
                      </ListGroupItem>
                      <ListGroupItem tag="a" href="/admin/akomodasi">
                        <i style={{margin:10}} className="now-ui-icons shopping_shop" />
                        Market
                      </ListGroupItem>
                  </ListGroup>
              </Card>
            </Col>
            <Col md={9}>
              <Row style={{display: 'flex',  justifyContent:'left', alignItems:'top'}}>
              {loading ? (<h1>Loading</h1>) : listLocation?.map((location) => (
                <Card className="card mb-6" style={{width: '100%'}}>
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <img width="100%" height="100%" src={bg1} alt="Card image cap" />
                    </div>
                    <div className="col-md-7">
                      <CardBody>
                        <CardTitle>{location.name}</CardTitle>
                        <CardText style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}><i style={{marginRight:8, color:"blue"}} className="now-ui-icons travel_info"/>{location.description}</CardText>
                        <CardText style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}><i style={{marginRight:8, color:"red"}} className="now-ui-icons location_pin"/>{location.address}</CardText>
                        <Link to={"/layouts/details/3"}>
                          <Button id="buttonCard" color="primary" block>Details</Button>
                        </Link>
                      </CardBody>
                    </div>
                  </div>
                </Card>
              ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      </div>
    </>
  );
}

export default Akomodasi;