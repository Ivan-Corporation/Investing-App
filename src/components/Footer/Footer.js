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
              Нашли ошибки?
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
              Работа у нас
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

        <Col >
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook" > 
                    <a href="https://github.com/Ivan-Corporation" className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <a href="https://github.com/Ivan-Corporation" className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="instagram">
                    <a href="https://github.com/Ivan-Corporation" className="fab fa-instagram" />
                  </Button>
                  <Button className="btn-icon btn-round" color="telegram">
                    <a href="https://github.com/Ivan-Corporation" className="fab fa-telegram" />
                  </Button>
                  <Button className="btn-icon btn-round" color="vk">
                    <a href="https://github.com/Ivan-Corporation" className="fab fa-vk" />
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


    

    <hr></hr>
    </div>
  );
}

export default Footer;
