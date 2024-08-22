import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">MC Queen</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              <NavDropdown title="Product" id="navbarScrollingDropdown">
                <NavDropdown.Item href="./product/watch.jsx">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex mt-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 mt-0"
                aria-label="Search"
              />
              <Button variant="outline-success" className='mt-0'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>

  );
}

export default NavBar;