import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ActiveLink from '../ActiveLink/ActiveLink';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { AuthContext } from '../Provider/AuthProvider';

export default function Header() {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
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
                            user && (
                                <div className="w-50 h-50 d-flex align-items-center">
                                    <Image title={user.displayName} className="img-fluid" src={user.photoURL} roundedCircle />
                                </div>
                            )
                        }

                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user ? <button onClick={handleLogout} className="btn btn-success">Logout</button> : <Link to="/login"><button className="btn btn-success">Login</button></Link>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
