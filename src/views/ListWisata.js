import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import {Link} from "react-router-dom";
import { baseURL, IMAGE_URL } from '../Utils/api';
import axios from "axios";
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

function ListWisata(){
  const [listLocation, setListLocation] = React.useState();
  const [galery, setGalery] = React.useState();
  const [distance, setDistance] = React.useState();
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true)
    axios
      .get(`${baseURL}locations`, { data: { userLong: 1.104, userLat: 1.102 } })
      .then((res) => {
        console.log(res);
        setListLocation(res.data['locations']);
        setGalery(res.data['galery']);
        setDistance(res.data[2]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    return () => {};
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${baseURL}locations/search`, { params: { search }})
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setListLocation(res.data.search_result);
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
                            <h2 className="title" style={{textAlign:"left"}}>Mau liburan kemana nih kamu?</h2>
                            <p className="category" style={{textAlign:"left", marginBottom:"30px"}}>
                              Cari tujuan wisata kamu dengan DolanKuy
                            </p>
                            <form>
                              <InputGroup className="no-border">
                                <Input placeholder="Cari tujuan kamu" onChange={(e) => setSearch(e.target.value)}/>
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
          <Col md={8} xs={12} style={{margin:"0", padding:"0"}}>
            {loading ? (<h1>Loading</h1>) : listLocation?.map((location) => (
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
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ListWisata;