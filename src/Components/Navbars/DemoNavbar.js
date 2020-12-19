import React from "react";
import {
    Collapse,
    Button,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavLink,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
} from "reactstrap";
import routes from "routes.js";
import logo from "assets/img/Dolankuylogo.png";
import {isLogin} from "Utils/auth.js"

class Header extends React.Component {
    state = {
        isOpen: false,
        dropdownOpen: false,
        color: "transparent",
    };
    sidebarToggle = React.createRef();

    toggle = () => {
        if (this.state.isOpen) {
        this.setState({
            color: "transparent",
        });
        } else {
        this.setState({
            color: "white",
        });
        }
        this.setState({
        isOpen: !this.state.isOpen,
        });
    };
    dropdownToggle = (e) => {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        });
    };
    getBrand = () => {
        var name;
        routes.map((prop, key) => {
        if (prop.collapse) {
            prop.views.map((prop, key) => {
            if (prop.path === this.props.location.pathname) {
                name = prop.name;
            }
            return null;
            });
        } else {
            if (prop.redirect) {
            if (prop.path === this.props.location.pathname) {
                name = prop.name;
            }
            } else {
            if (prop.path === this.props.location.pathname) {
                name = prop.name;
            }
            }
        }
        return null;
        });
        return name;
    };
    openSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        this.sidebarToggle.current.classList.toggle("toggled");
    };
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor = () => {
        if (window.innerWidth < 993 && this.state.isOpen) {
        this.setState({
            color: "white",
        });
        } else {
        this.setState({
            color: "transparent",
        });
        }
    };
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateColor.bind(this));
    }
    componentDidUpdate(e) {
        if (
        window.innerWidth < 993 &&
        e.history.location.pathname !== e.location.pathname &&
        document.documentElement.className.indexOf("nav-open") !== -1
        ) {
        document.documentElement.classList.toggle("nav-open");
        this.sidebarToggle.current.classList.toggle("toggled");
        }
    }
    render() {
        console.log(isLogin());
        return (
        // add or remove classes depending if we are on full-screen-maps page or not
        <Navbar
            color="white"
            expand="xl"
            className={
            this.props.location.pathname.indexOf("full-screen-maps") !== -1
                ? "navbar-absolute fixed-top"
                : "navbar-absolute fixed-top " +
                (this.state.color === "white")
            }
        >
            <Container fluid>
                <NavbarToggler onClick={this.toggle}>
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                </NavbarToggler>
                <NavbarBrand>
                <a href="#">
                    <img src={logo} style={{width:200, marginTop: -10, marginBottom: -15}} />
                </a>
                </NavbarBrand>
                <Collapse
                    isOpen={this.state.isOpen}
                    navbar
                    className="justify-content-end"
                >
                    <form>
                        <InputGroup className="no-border">
                            <Input placeholder="Search..." />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i className="now-ui-icons ui-1_zoom-bold" />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </form>
                    <Nav navbar>
                        <NavItem style={{margin:'5px'}}>
                            <NavLink className="nav-link" href="/admin/list-wisata">
                                List Wisata
                            </NavLink>
                        </NavItem>
                        <NavItem style={{margin:'5px'}}>
                            <NavLink className="nav-link" href="/admin/akomodasi">
                                Akomodasi
                            </NavLink>
                        </NavItem>
                        {
                            isLogin()
                            ?
                            <Dropdown
                                nav
                                isOpen={this.state.dropdownOpen}
                                toggle={(e) => this.dropdownToggle(e)}
                            >
                                <DropdownToggle caret nav>
                                <i className="now-ui-icons users_single-02" />
                                <p>
                                    <span className="d-lg-none d-md-block">Account</span>
                                </p>
                                </DropdownToggle>
                                    <DropdownMenu right>
                                    <DropdownItem tag="a" href="/admin/user-page">Profile</DropdownItem>
                                    <DropdownItem tag="a" href="#">Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            :
                            <>
                                <NavItem style={{margin:'5px'}}>
                                <Button style={{margin:'0px', paddingTop:'14px', paddingBottom:'14px'}} href="/admin/login" block>
                                    Login
                                </Button>
                                </NavItem>
                                <NavItem style={{margin:'5px'}}>
                                    <Button style={{margin:'0px', paddingTop:'14px', paddingBottom:'14px'}} href="/admin/akomodasi" block>
                                        Register
                                    </Button>
                                </NavItem>
                            </>
                        }
                        
                        
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        );
    }
}

export default Header;