import React from 'react';
import '../Components/Components.css'
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import {Button, Container, Card, CardColumns, Row, Col} from 'react-bootstrap';

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
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Tempat Wisata di Jogjakarta</h2>
                    </Col>
                </Row>
                <CardColumns className='my-2'>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            <Footer/>
        </div>
    );
}

export default ListWisata;