import React from 'react';
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from './contoh.jpg';
import '../Components/Components.css'
import {Button, Container, Card, CardColumns, CardDeck, Row, Col} from 'react-bootstrap';

function ListWisata() {
    return (
        <div>
            <NavbarTop/>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 className="brand">Kategori</h2>
                    </Col>
                </Row>
                <CardDeck className='my-2'>
                    <Card className='mr-0' className="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button className="buttonCard1" variant='block'>Kuliner</Button>
                    </Card>
                    <Card className='mr-0' className="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button className="buttonCard1" variant='block'>Tempat Ibadah</Button>
                    </Card>
                    <Card className='mr-0' className="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button className="buttonCard1" variant='block'>SPBU</Button>
                    </Card>
                    <Card className="card">
                        <Card.Img style={{borderRadius: '0%'}} src={contoh} alt="1"/>
                        <Button className="buttonCard1" variant='block'>Market</Button>
                    </Card>
                </CardDeck>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 className="brand">Akomodasi di sekitar Jogjakarta</h2>
                    </Col>
                </Row>
                <CardColumns className='my-2'>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title className="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button className="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title className="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button className="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title className="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button className="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            <Footer/>
        </div>
    );
}

export default ListWisata;