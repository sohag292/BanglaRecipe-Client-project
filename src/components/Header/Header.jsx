import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ActiveLink from '../ActiveLink/ActiveLink';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../Provider/AuthProvider';

export default function Header() {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Bangla<span className='text-success'>R</span>ecipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                    </Nav>
                    <Nav>
                        {
                            user && <Nav.Link href="#deets">
                                {user.displayName}
                            </Nav.Link>
                        }

                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user ? <button>Logout</button>:<Link to="/login"><button>Login</button></Link>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
