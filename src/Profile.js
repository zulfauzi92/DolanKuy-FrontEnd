import React from 'react';
import DolanKuy from './DolanKuy.png';
import avatar from './avatar.jpg';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {Button, Container, Nav, Navbar, Form, Jumbotron, Row, Col} from 'react-bootstrap';

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

const profilePicture = {
    borderRadius: '50%', 
    width: '300px', 
    height: '300px',
};

const editProfile = {
    fontStyle: 'italic', 
    fontFamily: 'Montserrat', 
    fontWeight: 'normal',
};

const saveButton = {
    color:'white', 
    backgroundColor: '#FF6329', 
    fontFamily: 'Montserrat', 
    fontWeight: '600', 
    float: 'right',
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

function Profile() {
    return (
        <div>
            <Container className='mb-5' fluid>
                <Navbar className='border' style={{backgroundColor: 'white'}} fixed="top">
                    <Navbar.Brand style={brand}>DolanKuy</Navbar.Brand>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Form inline>
                                <Form.Control style={{fontFamily: 'Montserrat'}} placeholder='search' className='mr-sm-2'/>
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
                                //<img style={profile} src={avatar} alt='profile'/>
                                //</Nav.Item>
                            }
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>
            </Container>
            <Container className="my-5">
                <Row>
                    <Col className="mt-5">
                        <img style={profilePicture} src={avatar} alt='profile'/>
                        <h4 className="mt-5 mx-5" style={editProfile}>
                            <a href='/' style={{color: "black"}}>Edit Photo Profile</a>
                        </h4>
                    </Col>
                    <Col className="mt-5">
                        <Form className="mb-5">
                            <Form.Group>
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan Nama"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan Email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Masukkan Password"/>
                            </Form.Group>
                        </Form>
                        <Button className='mt-5' style={saveButton} variant="basic">Simpan Perubahan</Button>
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

export default Profile;