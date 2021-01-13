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
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { Link } from 'react-router-dom';
import { baseURL, IMAGE_URL } from '../Utils/api';
import axios from "axios";
import { FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa';

function Akomodasi(){

  const [listLocation, setListLocation] = React.useState();
  const [galery, setGalery] = React.useState();
  const [distance, setDistance] = React.useState();
  const [search, setSearch] = React.useState();
  const [category, setCategory] = React.useState();
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

  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
              <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <Col md={8} xs={12}>
                      <Row>
                          <Col md={6} xs={12} style={{justifyContent:'center', alignItems:'center', paddingTop: '70px'}}>
                            <h2 className="title" style={{textAlign:"left", paddingBottom:"15px"}}>Bingung cari akomodasi dekat tempat liburan kamu? </h2>
                            <p className="category" style={{textAlign:"left", marginBottom:"30px"}}>
                              Dengan DolanKuy, kamu bisa tahu lokasi Akomodasi dekat tempat wisata kamu
                            </p>
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
                      <ListGroupItem tag="a" href="" onClick={(e) => {e.preventDefault();setCategory(2)}}>
                        <i style={{margin:10}} className="now-ui-icons travel_istanbul" />Tempat Ibadah
                      </ListGroupItem>
                      <ListGroupItem tag="a"href="" onClick={(e) => {e.preventDefault();setCategory(5)}}>
                        <i style={{margin:10}} className="now-ui-icons objects_spaceship" />SPBU
                      </ListGroupItem>
                      <ListGroupItem tag="a" href="" onClick={(e) => {e.preventDefault();setCategory(3)}}>
                        <i style={{margin:10}} className="now-ui-icons objects_support-17" />Kuliner
                      </ListGroupItem>
                      <ListGroupItem tag="a" href="" onClick={(e) => {e.preventDefault();setCategory(4)}}>
                        <i style={{margin:10}} className="now-ui-icons shopping_shop" />Market
                      </ListGroupItem>
                  </ListGroup>
              </Card>
            </Col>
            <Col md={9}>
              <Row style={{display: 'flex',  justifyContent:'left', alignItems:'top'}}>
              {loading ? (<h1>Loading</h1>) : listLocation?.filter((location) => (category ? (location.category_id === category) : true)).map((location) => (
                <Card className="card mb-6" style={{width: '100%'}}>
                  <div className="row no-gutters">
                    <div className="col-md-5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
                      <img height="210px" style={{flexShrink: 0, minWidth: '100%', minHeight: '100%'}} src={IMAGE_URL + location.image} alt="Image" />
                    </div>
                    <div className="col-md-7">
                      <CardBody>
                        <CardTitle><h5 style={{fontWeight:'600'}}>{location.name}</h5></CardTitle>
                        <CardText style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}><FaInfoCircle />{location.description}</CardText>
                        <CardText style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}><FaMapMarkerAlt />{location.address}</CardText>
                        <Link to={`/layouts/details/${location.id}`}>
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