import React from 'react';
import contoh from './Gallery/contoh.jpg';
import contoh1 from './Gallery/contoh1.jpg';
import contoh2 from './Gallery/contoh2.jpg';
import map from './Gallery/map.jpg';
import DolanKuy from './Gallery/DolanKuy.png';
//import avatar from './avatar.jpg';
import { FaEnvelope, FaPhoneAlt, FaTags, FaMapMarkerAlt } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import { BsFillClockFill } from 'react-icons/bs';
import {Button, Badge, ResponsiveEmbed, Container, Nav, Navbar, Form, Image, Jumbotron, Row, Col} from 'react-bootstrap';

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
    verticalAlign: 'middle',
};

const container = {
    position: 'relative',
    maxWidth: '1350px',
    margin: '0 auto',
};

const textStyle = {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    position: 'absolute',
    bottom: '0',
    background: 'rgba(0, 0, 0, 0.3)', /* Black background with 0.5 opacity */
    color: '#f1f1f1',
    width: '100%',
    padding: '20px',
};

const icon = {
    color: 'yellow',
    fontWeight: 'normal',
};

const deskripsi = {
    fontFamily: 'Roboto',
    fontSize: '18.72px',
    textAlign: 'justify',
};

const title = {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
};

const badges = {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
};

const galeri = {
    width: '100%',
    maxHeight: '200px',
    borderRadius: '8%',
};

const video = {
    width: '800px',
    maxHeight: '800px',
    borderRadius: '5%',
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
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

function Details() {
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
            <div style={container}>
                <Image className="mt-2" style={image} src={contoh1} fluid/>
                <div style={textStyle}>
                    <Container>
                        <h1>Wisata Taman Sari, Mengkhayalkan Para Putri</h1>
                        <h4 style={{fontWeight: 'bold'}}>4.5<TiStar style={icon}/></h4>
                    </Container>
                </div>
            </div>
            <Container className='my-5'>
                <p style={deskripsi}>
                    Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan 
                    dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar 
                    contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak 
                    dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk 
                    menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad,
                    tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan 
                    apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya 
                    lembaran-lembaran Letraset yang menggunakan kalimat-kalimat 
                    dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop 
                    Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
                </p>
            </Container>
            <Container className='my-5'>
                <h4 style={title}>Tags <FaTags style={{fontSize: '16px'}}/></h4>
                <Badge className="mx-1" style={badges} variant="secondary">pantai</Badge>
                <Badge className="mx-1" style={badges} variant="secondary">gunung</Badge>
                <Badge className="mx-1" style={badges} variant="secondary">panas</Badge>
            </Container>
            <Container className='my-5'>
                <h2 style={title}>Photos & Videos</h2>
                <Row className="my-3">
                    <Col>
                        <img style={galeri} src={contoh} alt="1"/>
                    </Col>
                    <Col>
                        <img style={galeri} src={contoh1} alt="2"/>
                    </Col>
                    <Col>
                        <img style={galeri} src={contoh2} alt="3"/>
                    </Col>
                </Row>
                <ResponsiveEmbed className="my-5" aspectRatio="21by9">
                    <embed style={video} src="https://www.youtube.com/embed/cFOvDNIe5-8"/>
                </ResponsiveEmbed>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-4'>
                        <h2 style={title}>Detail Location</h2>
                    </Col>
                </Row>
                <Image className="mt-3" style={image} src={map} fluid/>
                <Row>
                    <Col className="mt-3">
                        <p style={{fontFamily: 'Roboto'}}><FaMapMarkerAlt/> <strong>Location:</strong> Nginden Intan Timur II No.A2-41, Ngenden Jangkungan, Kec. Sukolilo, Kota SBY, Jawa Timur 60118</p>
                        <p style={{fontFamily: 'Roboto'}}><FaPhoneAlt/> <strong>Contact:</strong> 082345213534</p>
                        <p style={{fontFamily: 'Roboto'}}><BsFillClockFill/> <strong>Open:</strong> 08.00 AM.</p>
                    </Col>
                </Row>
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

export default Details;