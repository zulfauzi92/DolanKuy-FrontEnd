import React from 'react';
import '../Components/Components.css'
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import {Button, Container, Card, CardColumns, Row, Col} from 'react-bootstrap';
import { MdPlace } from 'react-icons/md';
import { MdGrade } from 'react-icons/md';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { baseURL } from '../Utils/api';
import axios from "axios";

const brand = {
    color: '#FF6329',
    fontFamily: 'Montserrat',
    fontWeight: '600',
};

const judulGambar = {
    fontFamily: 'Montserrat', 
    fontWeight: '600',
};

const buttonCard = {
    color:'white', 
    backgroundColor: '#FF6329', 
    fontFamily: 'Montserrat',
};

function ListWisata() {
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
                        <h2 id="brand">Event</h2>
                    </Col>
                </Row>
                <CardColumns className='my-2'>
                    {loading ? (<h1>Loading</h1>) : listLocation?.map((location) => (
                        <Card style={{width: '22rem'}}>
                            <Card.Img src={contoh} variant='top'/>
                            <Card.Body>
                                <Card.Title id="judulGambar">{location.name}</Card.Title>
                                <Card.Text style={{fontFamily: 'Roboto'}}>{location.description}</Card.Text>
                                <Link id="buttonCard" to={`/details/${location.id}`}>
                                    <Button id="buttonCard" variant='block'>Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </CardColumns>
            </Container>

            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Tempat Wisata di Jogjakarta</h2>
                    </Col>
                </Row>
                <Container className="border" id="cardList">
                    <Row >
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
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
                            
                            
                        </Col>
                        <Col xs={6} md={4}>
                                <Link id="buttonCard" to="/details">
                                    <Button id="buttonCard" variant='block'>Details</Button>
                                </Link>
                        </Col>
                        
                    </Row>
                    
                </Container>
                <br></br>
                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
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
                        </Col>
                        <Col xs={6} md={4}>
                                <Link id="buttonCard" to="/details">
                                    <Button id="buttonCard" variant='block'>Details</Button>
                                </Link>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
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
                        </Col>
                        <Col xs={6} md={4}>
                                <Link id="buttonCard" to="/details">
                                    <Button id="buttonCard" variant='block'>Details</Button>
                                </Link>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container className="border" id="cardList" >
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4} >
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
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
                        </Col>
                        <Col xs={6} md={4}>
                                <Link id="buttonCard" to="/details">
                                    <Button id="buttonCard" variant='block'>Details</Button>
                                </Link>
                        </Col>
                        
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </div>

        
    );
}

export default ListWisata;