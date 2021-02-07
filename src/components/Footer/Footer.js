/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              Github
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              О нас
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              Блог Паши?
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} сделано {" "}
          <i className="tim-icons icon-bulb-63" /> {" "}
          <a
            href="https://github.com/Ivan-Corporation"
            target="_blank"
          >
            Bukashka team
          </a>{" "}
          для инвесторов.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
