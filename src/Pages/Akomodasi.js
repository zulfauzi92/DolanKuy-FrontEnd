import React from 'react';
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import '../Components/Components.css'
import {Button, Container, Card, CardColumns, CardDeck, Row, Col} from 'react-bootstrap';
import { MdPlace } from 'react-icons/md';
import { MdGrade } from 'react-icons/md';
import { baseURL } from '../Utils/api';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import axios from "axios";

function Akomodasi() {

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
          setLoading(false);
          setListLocation(res.data[0]);
          setGalery(res.data[1]);
          setDistance(res.data[2]);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
      return () => {};
    }, []);
    return (
        <div>
            <NavbarTop/>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Kategori</h2>
                    </Col>
                </Row>
                <CardDeck className='my-2'>
                    <Card className='mr-0' id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>Kuliner</Button>
                    </Card>
                    <Card className='mr-0' id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>Tempat Ibadah</Button>
                    </Card>
                    <Card className='mr-0' id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>SPBU</Button>
                    </Card>
                    <Card id="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button id="buttonCard1" variant='block'>Market</Button>
                    </Card>
                </CardDeck>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Akomodasi di sekitar Jogjakarta</h2>
                    </Col>
                </Row>
                <Container className="border" id="cardList">
                {loading ? (<h1>Loading</h1>) : listLocation?.map((location) => (
                    <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>{location.name}</h5> </Row>
                            <Row> <p>{location.description}</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                                <Button id="tagCard">Default</Button>
                                <Button id="tagCard">Default</Button>
                                <Button id="tagCard">Default</Button>
                                <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>   
                        <Link id="buttonCard" to={`/details/${location.id}`}>
                            <Button id="detailsButtonCard" >Details</Button>
                        </Link> 
                        </Col>
                    </Row>
                ))}
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default Akomodasi;