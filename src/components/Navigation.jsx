import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";

function Navigation() {
  const history = useHistory();

  const onInputChange = ({ target: { value } }) => {
    const newRoute = value ? `/search/${value}` : `/homepage/`;
    history.push(newRoute);
  };

  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/homepage">24i Interview</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/homepage">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onChange={(e) => onInputChange(e)}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
