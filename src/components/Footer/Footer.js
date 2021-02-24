/*eslint-disable*/
import React from "react";

// reactstrap components
import { CardFooter, Col, Container, Nav, NavItem, NavLink, Button } from "reactstrap";

function Footer() {
  return (
    <div>
    <div className="footer">
      <Container fluid>
        <Nav>
          <Col>
          <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              Ошибка?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              Предложения
            </NavLink>
          </NavItem>
          </Col>

          <Col>
          <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              Работа
            </NavLink>
          </NavItem>  
        <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              Реклама
            </NavLink>
          </NavItem>
          </Col>

          <Col>
          <NavItem>
            <NavLink href="https://github.com/Ivan-Corporation">
              Сотрудничество
            </NavLink>
          </NavItem>
         
          </Col>

        </Nav>

        <Col>
                <div className="button-container">
                  <Button href="https://github.com/Ivan-Corporation" className="btn-icon btn-round" color="facebook" > 
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button href="https://github.com/Ivan-Corporation" className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button href="https://github.com/Ivan-Corporation" className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </Col>



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
      </div>


    

    
    </div>
  );
}

export default Footer;
