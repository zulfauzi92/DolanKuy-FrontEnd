import React from 'react';
import './Components.css';
import {Button, Container, Nav, Navbar, Form} from 'react-bootstrap';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import ListWisata from '../Pages/ListWisata'
import Akomodasi from '../Pages/Akomodasi'
import SignIn from '../Pages/Auth/SignIn';

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
                               <Nav.Link id="navLink">List Wisata</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link id="navLink" >Akomodasi</Nav.Link> 
                            </Nav.Item>

                            <Button id="buttonLogIn" className="mx-2" variant="basic">Login</Button>
                            <Button id="buttonSignUp" className="mx-2" variant="basic">Sign Up</Button>
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

            {/* <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/list_wisata">List Wisata</Link>
                            </li>
                            <li >
                                <Link to="/akomodasi">Akomodasi</Link></li>
                        </ul>
                    </nav>
                </div>
            <Switch>
                <Route path="/" exact component={SignIn}/>
                <Route path="/list_wisata" component={ListWisata}/>
                <Route path="/akomodasi" component={Akomodasi}/>
            </Switch> 
             </Router> */}
        </div>

        
        
    )
}

export default NavbarTop;   