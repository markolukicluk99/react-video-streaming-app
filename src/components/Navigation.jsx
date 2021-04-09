import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/homepage">24i Interview</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/homepage">Home</Nav.Link>
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
