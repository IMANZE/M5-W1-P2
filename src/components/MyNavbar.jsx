import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = (props) => {
 
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">{props.navTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#deets">Home</Nav.Link>
          <Nav.Link href="#deets">About</Nav.Link>
          <Nav.Link href="#memes">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar

