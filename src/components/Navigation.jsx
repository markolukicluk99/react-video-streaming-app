import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap'

function Navigation() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='/homepage'>24i Interview</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href='/homepage'>Home</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      </div>
    )
}

export default Navigation
