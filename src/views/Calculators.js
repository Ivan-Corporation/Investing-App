import React from 'react';

import tutor from 'assets/tutorials/tutor.jpg'

import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Row, Col, CardHeader
} from 'reactstrap';

const Calculators = (props) => {
  return (
    <div className="content">

      <h1>Калькуляторы</h1>
      <Row>
      <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                
                <h4 className="text-center"><b>Калькулятор сложного процента</b></h4>
                <CardTitle tag="h3">
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
               
             
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                
                <h4 className="text-center"><b>Калькулятор сложного процента</b></h4>
                <CardTitle tag="h3">
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
               
             
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                
                <h4 className="text-center"><b>Калькулятор сложного процента</b></h4>
                <CardTitle tag="h3">
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
               
             
              </CardBody>
            </Card>
          </Col>


        </Row>

<Row>

<Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                
                <h4 className="text-center"><b>Калькулятор сложного процента</b></h4>
                <CardTitle tag="h3">
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
               
             
              </CardBody>
            </Card>
          </Col>
          
</Row>

        
    </div>
  );
};

export default Calculators;