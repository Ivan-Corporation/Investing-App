import React from "react";
import boening from "./../assets/img/boening.png"
import tesla from "./../assets/img/tesla.png"
import gazprom from "./../assets/img/gazprom.png"
import stockLogo from "../assets/css/stockLogo.css"
import arrow_red from "./../assets/img/arrow_red.png"
import arrow_green from "./../assets/img/arrow_green.png"

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">

        
        <Row>
          
          <Col md="12">
            <Card>
              
              <CardHeader>
                <h3 className="title">Каталог Акций</h3>
                <p className="category">
                  Собрание акций {" "} 
                  <a href='https://ru.wikipedia.org/wiki/Список_фондовых_бирж'>доступных фондовых бирж</a>              
                </p>
              </CardHeader>
              <br/>
                <br/>
                <h2><center>Американские акции</center></h2>
<hr></hr>
              <CardBody className="all-icons">
                <Row>

                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={tesla} alt="stockLogo"/>
                      <p>TESLA</p>
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 1000$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={boening} alt="stockLogo"/>
                      <p>Boening CO</p>
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 123$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={gazprom} alt="stockLogo"/>
                      <p>Gazprom</p>
                      <p><img className="arrow" src={arrow_red} alt="arrow"/> 50$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={tesla} alt="stockLogo"/>
                      <p>TESLA</p>
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 1000$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={boening} alt="stockLogo"/>
                      <p>Boening CO</p>
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 123$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={gazprom} alt="stockLogo"/>
                      <p>Gazprom</p>
                      <p><img className="arrow" src={arrow_red} alt="arrow"/> 50$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={tesla} alt="stockLogo"/>
                      <p>TESLA</p>
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 1000$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={boening} alt="stockLogo"/>
                      <p>Boening CO</p>
                      
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 123$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={gazprom} alt="stockLogo"/>
                      <p>Gazprom</p>
                      <p><img className="arrow" src={arrow_red} alt="arrow"/> 50$</p>
                    </div>
                  </Col>
                  
                </Row>
                <br/>
                <br/>
                <h2><center>Мосбиржа</center></h2>
<hr></hr>

                <Row>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={tesla} alt="stockLogo"/>
                      <p>TESLA</p>
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 1000$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={boening} alt="stockLogo"/>
                      <p>Boening CO</p>
                      <p><img className="arrow" src={arrow_green} alt="arrow"/> 123$</p>
                    </div>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6"
                    lg="2"
                    md="3"
                    sm="4"
                  >
                    <div className="font-icon-detail">
                      <img className='stockLogo' src={gazprom} alt="stockLogo"/>
                      <p>Gazprom</p>
                      <p><img className="arrow" src={arrow_red} alt="arrow"/> 50$</p>
                    </div>
                  </Col>
                  
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
