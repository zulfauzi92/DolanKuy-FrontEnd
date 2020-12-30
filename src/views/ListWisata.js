import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
} from "reactstrap";
import CarouselHeader from "components/CarouselHeader/CarouselHeader.js";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import contoh from "assets/img/mike.jpg";
import bg3 from "assets/img/bg1.jpg";
import bg2 from "assets/img/bg3.jpg";
import bg1 from "assets/img/bg4.jpg";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { baseURL } from '../Utils/api';
import axios from "axios";

function ListWisata(){
  const [listLocation, setListLocation] = React.useState();
  const [galery, setGalery] = React.useState();
  const [distance, setDistance] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`${baseURL}locations`, { data: { userLong: 1.104, userLat: 1.102 } })
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
        <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Col md={8} xs={12}>
            {loading ? (<h1>Loading</h1>) : listLocation?.map((location) => (
            <Card className="card mb-6" style={{width: '100%'}}>
              <div className="row no-gutters">
                <div className="col-md-5">
                  <img width="100%" height="100%" src={bg1} alt="Card image cap" />
                </div>
                <div className="col-md-7">
                  <CardBody>
                    <CardTitle>{location.name}</CardTitle>
                    <CardText>{location.description}</CardText>
                    <Link id="buttonCard" to={`/admin/details/${location.id}`}>
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
