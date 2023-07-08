import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/curso-react-entrega-final/"> 
                        <Navbar.Brand> 
                        TaDa Delivery 
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to={`/categoria/1`}>
                            Cervezas
                            </NavLink> 
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={`/categoria/2`}>Destilados</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={`/categoria/3`}>Gaseosas</NavLink>
                        </Nav.Link>
                            <NavDropdown
                                title="Mi Perfil"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Mis Datos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Mis pedidos
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Log out
                                </NavDropdown.Item>
                            </NavDropdown>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
