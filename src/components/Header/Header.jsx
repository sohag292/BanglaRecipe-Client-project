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

    return (
        <Navbar collapseOnSelect className="h-25" expand="lg" bg="dark" variant="dark">
            <Container  className="brand-name">
                <Navbar.Brand href="#home">Indian<span className='text-success'>R</span>ecipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                    </Nav>
                   
                        {
                            user && (
                                <div className="img-container">
                                    <Image title={user.displayName} className="img-fluid" src={user.photoURL} roundedCircle />
                                </div>
                            )
                        }

                        
                            {
                                user ? <button onClick={handleLogout} className="btn btn-success">Logout</button> : <Link to="/login"><button className="btn btn-success">Login</button></Link>
                            }
                       
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
