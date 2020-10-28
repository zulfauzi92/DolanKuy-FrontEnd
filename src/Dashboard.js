import React from 'react';
import contoh from './contoh.jpg';
import contoh1 from './contoh1.jpg';
import contoh2 from './contoh2.jpg';
import DolanKuy from './DolanKuy.png';
//import avatar from './avatar.jpg';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {Button, Container, Nav, Navbar, Form, Carousel, Card, CardColumns, Jumbotron, Row, Col} from 'react-bootstrap';

const brand = {
    color: '#FF6329',
    fontFamily: 'Montserrat',
    fontWeight: '600',
};

const navLink = {
    color: '#FF6329', 
    fontFamily: 'Montserrat', 
    fontWeight: 'bold',
};

const buttonSignUp = {
    color:'#FF6329', 
    borderColor:'#FF6329', 
    fontFamily: 'Montserrat', 
    fontWeight: 'bold',
};

const buttonLogIn = {
    color:'white', 
    backgroundColor: '#FF6329', 
    fontFamily: 'Montserrat', 
    fontWeight: 'bold',
};

/*const profile = {
    borderRadius: "50%", 
    width: "40px", 
    height: "40px",
};*/

const image = {
    width: '100%',
    maxHeight: '550px',
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

const judulFooter = {
    color: '#979797', 
    fontFamily: 'Montserrat', 
    textAlign: 'center', 
    fontWeight: 'bold',
};

const teksFooter = {
    color: '#979797', 
    fontFamily: 'Montserrat', 
    textAlign: 'center',
};

function Dashboard() {
    return (
        <div>
            <Container className='mb-5' fluid>
                <Navbar className='border' style={{backgroundColor: 'white'}} fixed="top">
                    <Navbar.Brand style={brand}>DolanKuy</Navbar.Brand>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Form inline>
                                <Form.Control className='mr-sm-2' style={{fontFamily: 'Montserrat'}} placeholder='search'
                                />
                            </Form>
                            <Nav.Item>
                                <Nav.Link style={navLink}>List Wisata</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={navLink}>Akomodasi</Nav.Link>
                            </Nav.Item>
                            <Button className="mx-2" style={buttonLogIn} variant="basic">Login</Button>
                            <Button className="mx-2" style={buttonSignUp} variant="basic">Sign Up</Button>
                            {
                                //Tampilan sesudah Login
                                //<Nav.Item>
                                //<img style={profile} src={contoh} alt='profile'/>
                                //</Nav.Item>
                            }
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>
            </Container>
            <Carousel>
                <Carousel.Item className="mt-2" active>
                    <img style={image} src={contoh} alt='1'/>
                    <Carousel.Caption>
                        <h3 style={judulGambar}>Istana Ratu Boko, Reruntuhan Balairung Para Raja</h3>
                        <p style={{fontFamily: 'Montserrat'}}>Jika berkunjung ke Prambanan, destinasi lain yang sangat sayang untuk dilewatkan adalah Istana Ratu Boko.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img style={image} src={contoh1} alt='2'/>
                    <Carousel.Caption>
                        <h3 style={judulGambar}>Istana Ratu Boko, Reruntuhan Balairung Para Raja</h3>
                        <p style={{fontFamily: 'Montserrat'}}>Jika berkunjung ke Prambanan, destinasi lain yang sangat sayang untuk dilewatkan adalah Istana Ratu Boko.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mt-2">
                    <img style={image} src={contoh2} alt='3'/>
                    <Carousel.Caption>
                        <h3 style={judulGambar}>Istana Ratu Boko, Reruntuhan Balairung Para Raja</h3>
                        <p style={{fontFamily: 'Montserrat'}}>Jika berkunjung ke Prambanan, destinasi lain yang sangat sayang untuk dilewatkan adalah Istana Ratu Boko.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className='my-5'>
                <h2 className='text'>Tempat Wisata Indonesia</h2>
                <CardColumns className='my-3'>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title style={judulGambar}>Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button style={buttonCard} variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title style={judulGambar}>Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button style={buttonCard} variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title style={judulGambar}>Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button style={buttonCard} variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            <Jumbotron className="mb-0" fluid>
                <Container>
                    <Row>
                        <Col>
                            <img width="159" height="121" src={DolanKuy} alt='logo'/>
                        </Col>
                        <Col>
                            <h5 style={judulFooter}>About Us</h5>
                            <p style={teksFooter}>DolanKuy adalah Aplikasi sebagai referensi wisata yang ada di suatu daerah</p>
                        </Col>
                        <Col>
                            <h5 style={judulFooter}>Contact</h5>
                            <p style={teksFooter}><FaEnvelope/> ouremail@gmail.com</p>
                            <p style={teksFooter}><FaPhoneAlt/> +62 8123 4567 8374</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Dashboard;