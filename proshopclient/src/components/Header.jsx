import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="custom-navbar" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand  className="custom-brand">ProShop</Navbar.Brand>
          <Navbar.Toggle area-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={"/cart"}>
              <NavLink >
                {" "}
                <FaShoppingCart />
                Cart
              </NavLink>
              </LinkContainer>
              <LinkContainer to={"/Login"}>
              <NavLink >
                {" "}
                <FaUser />
                Sign In
              </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
