import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Blog() {
  return (
    <div className='mb-5'>
      <Container>
        <h2 className='text-center my-4'>All Questions</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className='h-100'>
              <Card.Body>
                <Card.Title>1. Tell us the differences between uncontrolled and controlled components. </Card.Title>
                <Card.Text>
                An uncontrolled component is a component that manages its state internally, without relying on React state. The component's state is managed by the browser's DOM, and is accessed using refs. Because the component's state is managed by the browser, the component does not have any control over its value.On the other hand, a controlled component is a component that receives its value from the parent component, and notifies the parent component when the value changes. The value of the component is passed as a prop from the parent component, and the parent component has complete control over the value.The main difference between the two is the way they handle state. In uncontrolled components, state is handled internally, while in controlled components, state is handled externally, by the parent component. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='h-100'>
              <Card.Body>
                <Card.Title>2. How to validate React props using PropTypes</Card.Title>
                <Card.Text>
                In React, PropTypes is a built-in library that provides a way to validate the props passed to a component. It helps in debugging and catching errors early in the development process. PropTypes define the type, shape, and requiredness of props that a component should receive.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>3. Tell us the difference between nodejs and express js </Card.Title>
                <Card.Text>
                Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript. Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications, such as routing, middleware support, and templating engines.In summary, Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>4. What is a custom hook, and why will you create a custom hook?</Card.Title>
                <Card.Text>
                A custom hook is a JavaScript function that utilizes one or more of the built-in hooks provided by React to implement specific behavior in a component. Custom hooks are used to abstract and reuse stateful logic between components. They allow you to encapsulate and reuse complex stateful logic and make your code more modular and reusable. Custom hooks are created when a certain behavior needs to be implemented in multiple components, or when a component's logic becomes too complex and needs to be extracted into a separate function.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  )
}
