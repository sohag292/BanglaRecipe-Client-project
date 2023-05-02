import React, { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { AuthContext } from "../Provider/AuthProvider";
export default function Register() {
    const {createUser} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);

        createUser(email, password)
        .then(result =>{
            const createUser = result.user;
            console.log(createUser);
            form.reset()
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <Container>
                <div className="mx-auto col-md-5 bg-light p-5 mt-4">
                    <h3 className=" text-center">Register your account</h3>
                    <hr className="mb-5" />
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text" name="name"
                                placeholder="Enter name" required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email" name="email"
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password" name="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhotoUrl">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                type="text" name="photo"
                                placeholder="Enter photo URL"
                                required
                            />
                        </Form.Group>

                        <div className="d-grid gap-2 mt-4 mb-3">
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                        <div className="text-center">
                            <Form.Text className="text-success">
                                Already Have an account?<Link to="/login">Login</Link>
                            </Form.Text>
                            <Form.Text className="text-success">

                            </Form.Text>
                            <Form.Text className="text-danger">
                            </Form.Text>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
