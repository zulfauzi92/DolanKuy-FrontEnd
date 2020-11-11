import React, { Component } from 'react';
import './Components.css';
import {Button, Container, Nav, Navbar, Form} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';



const NavbarTop = () => {
    return (
 
        <div>          
            <Container className='mb-5' fluid>
                <Navbar className='border' style={{backgroundColor: 'white'}} fixed="top">
                    <Navbar.Brand id="brand">DolanKuy</Navbar.Brand>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Form inline>
                                <Form.Control className='mr-sm-2' style={{fontFamily: 'Montserrat'}} placeholder='search'
                                />
                            </Form>

                            <Nav.Item>
                                
                               <Nav.Link id="navLink" >
                                   <Link to="/list_wisata">List Wisata</Link>
                               </Nav.Link>  
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link id="navLink">
                                   <Link to="/akomodasi">Akomodasi</Link>
                                </Nav.Link>      
                            </Nav.Item>
                            

                            
                            <Button id="buttonLogIn" className="mx-2" variant="basic"><Link to="/">Login</Link></Button>
                            <Button id="buttonSignUp" className="mx-2" variant="basic"><Link to="/sign_up">Sign Up</Link></Button>

                        
                           
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>
            </Container>
            </div>
    )
};


export default NavbarTop;   