import React from "react";
import {
  Card, 
  ListGroup, 
  ListGroupItem,
  Row,
  Col,
  Button,
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
            <h2 className="title">Selamat datang di DolanKuy</h2>
            <p className="category">
              DolanKuy adalah Aplikasi referensi wisata yang ada di Indonesia, 
              berbasis 3 platform yaitu mobile, website dan desktop. dengan DolanKuy 
              user bisa melihat list wisata dan akomodasi pada tempat wisata dengan 
              membandingkan review dari user lain
            </p>
          </div>
        }
      />
      <div className="content">
        <Row>
          <Col md="3">
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
          <Col md="9">
            <Row style={{display: 'flex',  justifyContent:'left', alignItems:'top'}}>
            {loading ? (<h1>Loading</h1>) : listLocation?.map((location) => (
              <Col md={4} xs={12}>
                <div class="card" style={{width: '100%'}}>
                  <img class="card-img-top" src={bg1} alt="Card image cap"/>
                  <div class="card-body">
                    <h4 class="card-title" style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>{location.name}</h4>
                    <div class="card-text" style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
                      {location.description}
                    </div>
                    <Link id="buttonCard" to={`/details/${location.id}`}>
                      <Button id="buttonCard" color="primary" block>Details</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Akomodasi;