import React, { useContext, useState } from 'react'
import { Form, Button, Container } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';
export default function Login() {
    const { signIn } = useContext(AuthContext);
    const [succes, setSuccess]= useState();
    const [error, setError] = useState()
    const handleLogin = event => {
        event.preventDefault();
        setSuccess('')
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Login successfully")
                form.reset()
            })
            .catch(error => {
                console.log(error);
                setError("Email or password is incorrect");
                form.reset()
            })

    }
    return (
        <div>
            <Container>
                <div className="mx-auto col-md-5 bg-light p-5 mt-5">
                    <h3 className=" text-center">Login your account</h3>
                    <hr className="mb-5" />
                    <Form onSubmit={handleLogin}>
                    <Form.Text className="text-success">
                    <p className=" text-success text-center fs-5 fw-bolder">{succes}</p>
                            </Form.Text>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email" name="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password" name="password"
                                placeholder="Enter your Password"
                                required
                            />
                        </Form.Group>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                        <div className="d-grid gap-2 mt-4 mb-3">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <h6 className='text-center'>OR</h6>
                            <Button variant="danger" type="submit">
                                <FaGoogle /> Login With Google
                            </Button>
                            <Button variant="dark" type="submit">
                                <FaGithub /> Login With Github
                            </Button>
                        </div>
                        <div className="text-center">
                            <Form.Text className="text-secondary">
                                Dont't Have an account?<Link to="/register">Register</Link>
                            </Form.Text>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
